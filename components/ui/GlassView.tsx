import { useColorScheme } from '@/hooks/use-color-scheme';
import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface GlassViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function GlassView({ children, style }: GlassViewProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, style]}>
      <BlurView
        style={StyleSheet.absoluteFillObject}
        blurType={isDark ? 'dark' : 'light'}
        blurAmount={10}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
  },
});
