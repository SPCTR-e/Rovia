

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#2D2A26', 
    background: '#FDFCF8', 
    tint: '#E05D5D', 
    icon: '#8F8981', 
    tabIconDefault: '#8F8981',
    tabIconSelected: '#E05D5D',
    cardBackground: '#FFFFFF',
    border: '#EBE5DE',
    primary: '#E05D5D',
    textSecondary: '#68645E',
    error: '#D32F2F',
    success: '#388E3C',
  },
  dark: {
    text: '#ECEDEE',
    background: '#1A1816', 
    tint: '#E05D5D',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#E05D5D',
    cardBackground: '#25221F',
    border: '#3E3832',
    primary: '#E05D5D',
    textSecondary: '#9BA1A6',
    error: '#EF5350',
    success: '#66BB6A',
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
