import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, useColorScheme, View } from 'react-native';
import Animated, {
    Easing,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

// Keep the splash screen visible while we fetch resources
try {
    SplashScreen.preventAutoHideAsync().catch(() => { });
} catch (e) { }

interface Props {
    onAnimationFinish: (isFinished: boolean) => void;
}

export function AnimatedSplashScreen({ onAnimationFinish }: Props) {
    const colorScheme = useColorScheme();
    const isDark = colorScheme !== 'light';

    const logoScale = useSharedValue(0.3);
    const logoOpacity = useSharedValue(0);
    const wordmarkOpacity = useSharedValue(0);
    const containerOpacity = useSharedValue(1);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const [step, setStep] = useState(0);

    useEffect(() => {
        // Step 1: Fade + scale in the Rovia icon
        logoOpacity.value = withTiming(1, { duration: 600 });
        logoScale.value = withTiming(1, {
            duration: 800,
            easing: Easing.out(Easing.back(1.2))
        }, () => {
            runOnJS(setStep)(1);
        });
    }, []);

    useEffect(() => {
        if (step === 1) {
            // Step 2: Show Wordmark
            wordmarkOpacity.value = withTiming(1, { duration: 500 }, () => {
                runOnJS(setStep)(2);
            });
        }
        if (step === 2) {
            // Signal that we are starting to leave (for pointerEvents)
            runOnJS(setIsFadingOut)(true);

            // Step 3: Fade out everything
            containerOpacity.value = withDelay(800, withTiming(0, { duration: 500 }, () => {
                // DEFENSIVE: Always call finish, don't check for 'done'
                runOnJS(onAnimationFinish)(true);
            }));
            
            // Absolute safety fallback for this component
            const timer = setTimeout(() => {
                onAnimationFinish(true);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const logoStyle = useAnimatedStyle(() => ({
        opacity: logoOpacity.value,
        transform: [{ scale: logoScale.value }],
    }));

    const wordmarkStyle = useAnimatedStyle(() => ({
        opacity: wordmarkOpacity.value,
    }));

    const containerStyle = useAnimatedStyle(() => ({
        opacity: containerOpacity.value,
    }));

    const bgColor = isDark ? '#1A1A1A' : '#F5F0EB';

    // Dark bg → black Rovia icon + black SPCTR/e wordmark
    // Light bg → white Rovia icon + white SPCTR/e wordmark
    const roviaIcon = isDark
        ? require('../assets/images/roviaiconsplashblack.png')
        : require('../assets/images/roviaiconsplashwhite.png');

    const spctreIcon = isDark
        ? require('../assets/images/spctreiconsplashblack.png')
        : require('../assets/images/spctreiconsplashwhite.png');

    return (
        <Animated.View 
            pointerEvents={isFadingOut ? "none" : "auto"}
            style={[styles.container, { backgroundColor: bgColor }, containerStyle]}
        >
            {/* Center: Rovia icon */}
            <View style={styles.centerContent}>
                <Animated.View style={[styles.logoContainer, logoStyle]}>
                    <Image
                        source={roviaIcon}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </Animated.View>
            </View>

            {/* Bottom: SPCTR/e wordmark */}
            <Animated.View style={[styles.wordmarkContainer, wordmarkStyle]}>
                <Image
                    source={spctreIcon}
                    style={styles.wordmark}
                    resizeMode="contain"
                />
            </Animated.View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 9999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        width: 180,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    wordmarkContainer: {
        alignItems: 'center',
        paddingBottom: 40,
    },
    wordmark: {
        width: 160,
        height: 64,
    },
});
