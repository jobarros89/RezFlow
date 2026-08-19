import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type PressableProps, type TextStyle } from 'react-native';

import { colors, fontFamily, radius, spacing } from '@/constants/theme';

type ButtonProps = PressableProps & {
  label: string;
  leftAdornment?: ReactNode;
  variant?: 'primary' | 'secondary';
  labelStyle?: TextStyle;
};

export function Button({ label, disabled, leftAdornment, variant = 'primary', style, labelStyle, ...props }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={(state) => [
        styles.button,
        state.pressed && styles.pressed,
        disabled && styles.disabled,
        variant === 'secondary' && styles.secondary,
        typeof style === 'function' ? style(state) : style,
      ]}
      {...props}>
      <View style={styles.content}>
        {leftAdornment}
        <Text style={[styles.label, variant === 'secondary' && styles.secondaryLabel, labelStyle]}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { alignItems: 'center', backgroundColor: colors.primary, borderRadius: radius.md, justifyContent: 'center', minHeight: 56, paddingHorizontal: spacing.lg },
  pressed: { backgroundColor: colors.primaryPressed },
  disabled: { opacity: 0.55 },
  secondary: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1 },
  content: { alignItems: 'center', flexDirection: 'row', gap: spacing.sm, justifyContent: 'center' },
  label: { color: '#090909', fontFamily: fontFamily.bold, fontSize: 16, letterSpacing: 1.1 },
  secondaryLabel: { color: colors.white },
});
