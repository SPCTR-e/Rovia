import { usePathname, useRouter } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';

const TAB_ROUTES = ['/', '/explore', '/transport'];

const TAB_ORDER: Record<string, number> = {
    '/': 0,
    '/explore': 1,
    '/transport': 2,
};

const SCREEN_WIDTH = Dimensions.get('window').width;
let globalLastIndex = 0;

interface Props {
    children: React.ReactNode;
    associatedPath: string;
}

export function ScreenTransition({ children, associatedPath }: Props) {
    const pathname = usePathname();
    const router = useRouter();

    const myIndex = TAB_ORDER[associatedPath] ?? 0;
    const currentIndex = TAB_ORDER[pathname] ?? 0;
    const isActive = pathname === associatedPath;

    const opacity = useSharedValue(0);
    const translateX = useSharedValue(0);

    
    useLayoutEffect(() => {
        if (isActive) {
            const isDifferentTab = myIndex !== globalLastIndex;
            const direction = myIndex > globalLastIndex ? 1 : -1;

            if (isDifferentTab) {
                
                translateX.value = direction * (SCREEN_WIDTH * 0.3);
                opacity.value = 1;

                
                translateX.value = withSpring(0, {
                    damping: 25,
                    stiffness: 200, 
                    mass: 0.8
                });

                globalLastIndex = myIndex;
            } else {
                translateX.value = 0;
                opacity.value = 1;
            }
        } else {
            opacity.value = 0;
        }
    }, [isActive, myIndex]);

    const switchTab = (direction: 'left' | 'right') => {
        const nextIndex = direction === 'left' ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex >= 0 && nextIndex < TAB_ROUTES.length) {
            router.push(TAB_ROUTES[nextIndex] as any);
        }
    };

    
    const pan = Gesture.Pan()
        .activeOffsetX([-5, 5]) 
        .onUpdate((event) => {
            
            
            translateX.value = event.translationX * 0.5;
        })
        .onEnd((event) => {
            
            const draggedFar = Math.abs(event.translationX) > 60;
            const flickedFast = Math.abs(event.velocityX) > 400;

            if (draggedFar || flickedFast) {
                
                const exitDirection = event.translationX > 0 ? 1 : -1;
                translateX.value = withSpring(exitDirection * SCREEN_WIDTH, { velocity: event.velocityX });

                
                const direction = event.translationX > 0 ? 'right' : 'left';
                runOnJS(switchTab)(direction);
            } else {
                
                translateX.value = withSpring(0, { damping: 20, stiffness: 200 });
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        flex: 1,
        opacity: opacity.value,
        transform: [{ translateX: translateX.value }],
    }));

    if (!isActive) {
        return <Animated.View style={[styles.container, animatedStyle]}>{children}</Animated.View>;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <GestureDetector gesture={pan}>
                <Animated.View style={[styles.container, animatedStyle]}>
                    {children}
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
});