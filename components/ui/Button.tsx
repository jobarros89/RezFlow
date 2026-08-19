import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

import { colors, radius, spacing } from '@/constants/theme';

type ButtonProps = PressableProps & {
  label: string;
};

export function Button({ label, disabled, style, ...props }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={(state) => [
        styles.button,
        state.pressed && styles.pressed,
        disabled && styles.disabled,
        typeof style === 'function' ? style(state) : style,
      ]}
      {...props}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { alignItems: 'center', backgroundColor: colors.primary, borderRadius: radius.md, justifyContent: 'center', minHeight: 54, paddingHorizontal: spacing.lg },
  pressed: { backgroundColor: colors.primaryPressed },
  disabled: { opacity: 0.55 },
  label: { color: colors.white, fontSize: 14, fontWeight: '800', letterSpacing: 0.8 },
});
