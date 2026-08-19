export const colors = {
  primary: '#7C3AED',
  primaryPressed: '#6D28D9',
  secondary: '#A78BFA',
  background: '#000000',
  surface: '#111111',
  text: '#FFFFFF',
  mutedText: '#A0A0A0',
  border: '#333333',
  placeholder: '#777777',
  white: '#FFFFFF',
  error: '#B42318',
} as const;

export const fontFamily = {
  regular: 'Oswald_400Regular',
  medium: 'Oswald_500Medium',
  semibold: 'Oswald_600SemiBold',
  bold: 'Oswald_700Bold',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const radius = {
  sm: 12,
  md: 16,
  lg: 24,
  pill: 999,
} as const;

export const typography = {
  display: 32,
  title: 24,
  body: 16,
  label: 14,
  caption: 13,
} as const;
