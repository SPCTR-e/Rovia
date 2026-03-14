import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UnifiedTabs } from '@/components/UnifiedTabs';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

export default function TabLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const hasOnboarded = await AsyncStorage.getItem('hasOnboarded');
        if (hasOnboarded !== 'true') {
          router.replace('/onboarding');
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
      } finally {
        setIsChecking(false);
        // Ensure navigation or render has started before hiding native splash
        await SplashScreen.hideAsync().catch(() => {});
      }
    };

    checkOnboarding();
  }, []);

  if (isChecking) {
    return <View style={{ flex: 1, backgroundColor: theme.background }} />;
  }

  return <UnifiedTabs />;
}
