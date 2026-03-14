import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { AnimatedSplashScreen } from '@/components/AnimatedSplashScreen';
import { FavoritesProvider } from '@/components/FavoritesContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import MapLibreGL from '@maplibre/maplibre-react-native';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from '@/constants/theme';

let hasShownSplash = false;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const [isAnimationFinished, setIsAnimationFinished] = useState(hasShownSplash);

  // Safety fallback: Ensure splash unmounts even if animation callback misses
  useEffect(() => {
    if (!isAnimationFinished) {
      const timer = setTimeout(() => {
        setIsAnimationFinished(true);
        hasShownSplash = true;
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAnimationFinished]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FavoritesProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <View style={{ flex: 1, backgroundColor: theme.background, overflow: 'hidden' }} collapsable={false}>
            <Stack screenOptions={{ 
              headerShown: false, 
              animation: 'none',
              contentStyle: { backgroundColor: theme.background }
            }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="onboarding" />
              <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal', headerShown: true }} />
              <Stack.Screen name="batorama" />
              <Stack.Screen name="sight/[id]" />
            </Stack>

            {!isAnimationFinished && (
              <AnimatedSplashScreen
                onAnimationFinish={() => {
                  console.log('Splash finished, unmounting officially.');
                  hasShownSplash = true;
                  setIsAnimationFinished(true);
                }}
              />
            )}
          </View>
          <StatusBar style="auto" />
        </ThemeProvider>
      </FavoritesProvider>
    </GestureHandlerRootView>
  );
}
