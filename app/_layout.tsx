import { Stack } from 'expo-router';
import { useFonts, Oswald_400Regular, Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold } from '@expo-google-fonts/oswald';
import { StatusBar } from 'expo-status-bar';

import { colors } from '@/constants/theme';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Oswald_400Regular, Oswald_500Medium, Oswald_600SemiBold, Oswald_700Bold });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ contentStyle: { backgroundColor: colors.background }, headerShown: false }} />
    </>
  );
}
