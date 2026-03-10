

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#1E1E1E',
    background: '#F5F0EB',
    tint: '#C9524A',
    icon: '#888480',
    tabIconDefault: '#888480',
    tabIconSelected: '#C9524A',
    cardBackground: '#E8E2DA',
    border: '#D8D2CA',
    primary: '#C9524A',
    textSecondary: '#888480',
    textMuted: '#888480',
    error: '#D32F2F',
    success: '#388E3C',
    accentSoft: 'rgba(201,82,74,0.15)',
    surface: '#E8E2DA',
    accent: '#C9524A',
    warning: '#FF9800',
  },
  dark: {
    text: '#F5F0EB',
    background: '#1A1A1A',
    tint: '#C9524A',
    icon: '#888480',
    tabIconDefault: '#888480',
    tabIconSelected: '#C9524A',
    cardBackground: '#2A2826',
    border: '#3A3835',
    primary: '#C9524A',
    textSecondary: '#888480',
    textMuted: '#888480',
    error: '#EF5350',
    success: '#66BB6A',
    accentSoft: 'rgba(201,82,74,0.15)',
    surface: '#2A2826',
    accent: '#C9524A',
    warning: '#FF9800',
  },
};

export const Fonts = Platform.select({
  ios: {

    sans: 'system-ui',

    serif: 'ui-serif',

    rounded: 'ui-rounded',

    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
