import { ScreenTransition } from '@/components/ScreenTransition';
import { HomeContent } from '@/components/screens/HomeContent';
import { useRouter } from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  const router = useRouter();

  const handleNavigate = (path: string, cat?: string) => {
    if (path === '/explore' && cat) {
      // Navigate to the Explore tab with the category param
      router.push({ pathname: '/explore', params: { category: cat } });
    } else if (path === '/explore') {
      router.push('/explore');
    } else if (path === '/transport') {
      router.push('/transport');
    } else {
      router.push(path as any);
    }
  };

  return (
    <ScreenTransition associatedPath="/">
      <HomeContent onNavigate={handleNavigate} />
    </ScreenTransition>
  );
}
