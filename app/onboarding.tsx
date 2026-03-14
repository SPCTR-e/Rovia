import React, { useState, useRef, useEffect } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: 0,
    eyebrow: "Welcome to",
    title: "Rovia",
    body: "Your intelligent travel companion. Discover the world's finest destinations, curated with precision.",
    icon: (color: string) => (
      <Svg width="72" height="72" viewBox="0 0 64 64" fill="none">
        <Circle cx="32" cy="32" r="30" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" />
        <Circle cx="32" cy="32" r="4" fill={color} />
        <Line x1="32" y1="8" x2="32" y2="56" stroke={color} strokeWidth="1" opacity="0.4" />
        <Line x1="8" y1="32" x2="56" y2="32" stroke={color} strokeWidth="1" opacity="0.4" />
        <Path d="M32 12 C38 22 38 42 32 52" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
        <Path d="M32 12 C26 22 26 42 32 52" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
      </Svg>
    ),
  },
  {
    id: 1,
    eyebrow: "Explore",
    title: "Every Corner",
    body: "Uncover hidden gems and iconic landmarks alike. Rovia maps your curiosity to the world.",
    icon: (color: string) => (
      <Svg width="72" height="72" viewBox="0 0 64 64" fill="none">
        <Path d="M12 52 L22 28 L32 38 L44 18 L52 52 Z" stroke={color} strokeWidth="1.5" fill="none" />
        <Circle cx="44" cy="18" r="4" fill={color} opacity="0.8" />
        <Path d="M8 52 L56 52" stroke={color} strokeWidth="1" opacity="0.3" />
        <Circle cx="22" cy="28" r="2.5" stroke={color} strokeWidth="1" fill="none" />
        <Circle cx="32" cy="38" r="2.5" stroke={color} strokeWidth="1" fill="none" />
      </Svg>
    ),
  },
  {
    id: 2,
    eyebrow: "Plan",
    title: "Your Itinerary",
    body: "Build day-by-day journeys with intelligent suggestions. Every hour of travel, accounted for.",
    icon: (color: string) => (
      <Svg width="72" height="72" viewBox="0 0 64 64" fill="none">
        <Rect x="12" y="14" width="40" height="38" rx="3" stroke={color} strokeWidth="1.5" fill="none" />
        <Line x1="12" y1="24" x2="52" y2="24" stroke={color} strokeWidth="1" opacity="0.5" />
        <Line x1="22" y1="8" x2="22" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <Line x1="42" y1="8" x2="42" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <Rect x="20" y="30" width="8" height="6" rx="1" fill={color} opacity="0.7" />
        <Rect x="36" y="30" width="8" height="6" rx="1" fill={color} opacity="0.3" />
        <Rect x="20" y="40" width="8" height="6" rx="1" fill={color} opacity="0.3" />
        <Rect x="36" y="40" width="8" height="6" rx="1" fill={color} opacity="0.5" />
      </Svg>
    ),
  },
  {
    id: 3,
    eyebrow: "Navigate",
    title: "With Ease",
    body: "Real-time transport guidance. Trains, buses, and more — Rovia keeps you moving seamlessly.",
    icon: (color: string) => (
      <Svg width="72" height="72" viewBox="0 0 64 64" fill="none">
        <Path d="M16 40 Q24 20 32 28 Q40 36 48 16" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <Circle cx="16" cy="40" r="3.5" fill={color} opacity="0.6" />
        <Circle cx="48" cy="16" r="3.5" fill={color} />
        <Circle cx="32" cy="28" r="3" fill={color} />
      </Svg>
    ),
  },
  {
    id: 4,
    eyebrow: "Your Language",
    title: "Your World",
    body: "Rovia speaks your language. Select your preference and travel without borders.",
    icon: null,
    isLanguage: true,
  },
];

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "ja", label: "日本語" },
];

export default function RoviaOnboarding() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const isDark = colorScheme === 'dark';

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedLang, setSelectedLang] = useState("en");

  const slideOpacity = useSharedValue(1);
  const slideTranslateX = useSharedValue(0);

  // Automatically fade in whenever the active index changes
  useEffect(() => {
    slideOpacity.value = withTiming(1, { duration: 350 });
    slideTranslateX.value = withTiming(0, { 
      duration: 350, 
      easing: Easing.out(Easing.quad) 
    });
  }, [activeIndex]);

  const goTo = (idx: number, dir: number = 1) => {
    if (idx === activeIndex) return;
    
    // Out Animation
    slideOpacity.value = withTiming(0, { duration: 180 });
    slideTranslateX.value = withTiming(-dir * 30, { duration: 180 }, (finished) => {
      if (finished) {
        // Change state on JS thread
        runOnJS(setActiveIndex)(idx);
        
        // Prepare position for incoming slide (still at opacity 0)
        slideTranslateX.value = dir * 30;
      }
    });
  };

  const handleNext = () => {
    if (activeIndex < slides.length - 1) goTo(activeIndex + 1, 1);
  };
  
  const handlePrev = () => {
    if (activeIndex > 0) goTo(activeIndex - 1, -1);
  };

  const panGesture = Gesture.Pan()
    .onEnd((e) => {
      if (e.translationX < -50) {
        runOnJS(handleNext)();
      } else if (e.translationX > 50) {
        runOnJS(handlePrev)();
      }
    });

  const animatedSlideStyle = useAnimatedStyle(() => ({
    opacity: slideOpacity.value,
    transform: [{ translateX: slideTranslateX.value }],
  }));

  const slide = slides[activeIndex];
  const isLast = activeIndex === slides.length - 1;

  const wordmarkImage = isDark
    ? require('../assets/images/spctreiconsplashwhite.png')
    : require('../assets/images/spctreiconsplashblack.png');

  const roviaLogo = isDark
    ? require('../assets/images/roviaiconsplashblack.png')
    : require('../assets/images/roviaiconsplashwhite.png');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} collapsable={false}>
        <GestureDetector gesture={panGesture}>
          <View style={styles.content} collapsable={false}>
            {/* Header / Wordmark */}
            <View style={styles.header}>
              <Image
                source={wordmarkImage}
                style={styles.wordmark}
                resizeMode="contain"
              />
            </View>

            {/* Main Slide Content */}
            <Animated.View style={[styles.slideContainer, animatedSlideStyle]}>
              <View style={styles.iconContainer}>
                {activeIndex === 0 ? (
                  <Image
                    source={roviaLogo}
                    style={styles.roviaLogo}
                    resizeMode="contain"
                  />
                ) : (
                  slide.icon?.(theme.accent)
                )}
              </View>

              <View style={styles.textContainer}>
                <View style={styles.eyebrowContainer}>
                  <View style={[styles.ornamentLine, { backgroundColor: theme.accent }]} />
                  <Text style={[styles.eyebrow, { color: theme.accent }]}>
                    {slide.eyebrow}
                  </Text>
                </View>

                <Text style={[styles.title, { color: theme.text }]}>
                  {slide.title}
                </Text>

                <Text style={[styles.body, { color: theme.textSecondary }]}>
                  {slide.body}
                </Text>

                {slide.isLanguage && (
                  <View style={styles.languageGrid}>
                    {languages.map((lang) => (
                      <TouchableOpacity
                        key={lang.code}
                        style={[
                          styles.langBtn,
                          { borderColor: theme.border },
                          selectedLang === lang.code && { 
                            backgroundColor: theme.accentSoft,
                            borderColor: theme.accent
                          }
                        ]}
                        onPress={() => setSelectedLang(lang.code)}
                      >
                        <Text style={[
                          styles.langText,
                          { color: theme.textSecondary },
                          selectedLang === lang.code && { color: theme.text }
                        ]}>
                          {lang.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </Animated.View>

            {/* Footer / Controls */}
            <View style={styles.footer}>
              {/* Pagination Dots */}
              <View style={styles.pagination}>
                {slides.map((_, i) => (
                  <TouchableOpacity 
                    key={i} 
                    onPress={() => goTo(i, i > activeIndex ? 1 : -1)}
                    style={[
                      styles.dot,
                      { backgroundColor: theme.border },
                      i === activeIndex && [styles.dotActive, { backgroundColor: theme.accent }]
                    ]} 
                  />
                ))}
              </View>

              {/* Navigation buttons */}
              <View style={styles.navRow}>
                <TouchableOpacity
                  onPress={handlePrev}
                  disabled={activeIndex === 0}
                  style={[
                    styles.navBtn,
                    { borderColor: theme.border },
                    activeIndex === 0 && { opacity: 0.25 }
                  ]}
                >
                  <Text style={[styles.navBtnText, { color: theme.textSecondary }]}>←</Text>
                </TouchableOpacity>

                {isLast ? (
                  <TouchableOpacity
                    style={[styles.ctaBtn, { backgroundColor: theme.accent }]}
                    onPress={async () => {
                      try {
                        await AsyncStorage.setItem('hasOnboarded', 'true');
                        router.replace('/');
                      } catch (error) {
                        console.error('Error saving onboarding status:', error);
                        router.replace('/');
                      }
                    }}
                  >
                    <Text style={[styles.ctaBtnText, { color: theme.text }]}>Get Started</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.nextBtn, { backgroundColor: theme.accent, borderColor: theme.accent }]}
                    onPress={handleNext}
                  >
                    <Text style={[styles.nextBtnText, { color: theme.text }]}>Next</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </GestureDetector>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 36,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  wordmark: {
    height: 14,
    width: 60,
    opacity: 0.7,
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    height: 80,
    marginBottom: 40,
    justifyContent: 'center',
  },
  roviaLogo: {
    height: 72,
    width: 72,
  },
  textContainer: {
    gap: 0,
  },
  eyebrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  ornamentLine: {
    width: 40,
    height: 1,
    opacity: 0.5,
  },
  eyebrow: {
    fontSize: 11,
    fontFamily: Platform.OS === 'ios' ? 'Outfit' : 'sans-serif',
    fontWeight: '300',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 52,
    fontFamily: Platform.OS === 'ios' ? 'Cormorant Garamond' : 'serif',
    fontWeight: '300',
    lineHeight: 52,
    letterSpacing: -0.5,
    marginBottom: 24,
  },
  body: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Outfit' : 'sans-serif',
    fontWeight: '300',
    lineHeight: 24,
    maxWidth: 280,
  },
  languageGrid: {
    marginTop: 36,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  langBtn: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    minWidth: '45%',
  },
  langText: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Outfit' : 'sans-serif',
    fontWeight: '300',
    letterSpacing: 0.5,
  },
  footer: {
    paddingBottom: 48,
    gap: 32,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    width: 22,
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBtnText: {
    fontSize: 18,
  },
  ctaBtn: {
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 4,
  },
  ctaBtnText: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'Outfit' : 'sans-serif',
    fontWeight: '400',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  nextBtn: {
    height: 44,
    paddingHorizontal: 28,
    borderRadius: 4,
    justifyContent: 'center',
    borderWidth: 1,
  },
  nextBtnText: {
    fontSize: 13,
    fontFamily: Platform.OS === 'ios' ? 'Outfit' : 'sans-serif',
    fontWeight: '400',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
});
