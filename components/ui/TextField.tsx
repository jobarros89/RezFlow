import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';

import { colors, fontFamily, radius, spacing } from '@/constants/theme';

type TextFieldProps = TextInputProps & {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export function TextField({ label, icon, secureTextEntry, ...props }: TextFieldProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const isPassword = Boolean(secureTextEntry);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <Ionicons color={colors.primary} name={icon} size={19} />
        <TextInput
          placeholderTextColor={colors.placeholder}
          secureTextEntry={isPassword && !isPasswordVisible}
          style={styles.input}
          {...props}
        />
        {isPassword && (
          <Pressable
            accessibilityLabel={isPasswordVisible ? 'Ocultar senha' : 'Mostrar senha'}
            accessibilityRole="button"
            hitSlop={10}
            onPress={() => setPasswordVisible((visible) => !visible)}>
            <Ionicons color={colors.mutedText} name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'} size={20} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: spacing.sm },
  label: { color: colors.white, fontFamily: fontFamily.semibold, fontSize: 14, letterSpacing: 1.1 },
  inputWrapper: { alignItems: 'center', backgroundColor: colors.surface, borderColor: colors.border, borderRadius: radius.sm, borderWidth: 1, flexDirection: 'row', minHeight: 56, paddingHorizontal: spacing.md },
  input: { color: colors.text, flex: 1, fontSize: 16, minHeight: 54, paddingHorizontal: spacing.sm },
});
