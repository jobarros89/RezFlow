import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/ui/TextField';
import { colors, radius, spacing } from '@/constants/theme';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Authentication will be provided by Supabase in a future sprint.
    console.info('Mock login', { email, hasPassword: Boolean(password) });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding', default: undefined })} style={styles.keyboard}>
        <View style={styles.content}>
          <View style={styles.hero}>
            <View style={styles.mark}><Text style={styles.markText}>R</Text></View>
            <Text style={styles.brand}>REZFLOW</Text>
            <Text style={styles.manifesto}>Conhecer a Deus{`\n`}Encontrar liberdade{`\n`}Descobrir propósito{`\n`}Fazer a diferença</Text>
          </View>

          <View style={styles.form}>
            <TextField label="E-mail" placeholder="seuemail@exemplo.com" autoCapitalize="none" autoComplete="email" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <TextField label="Senha" placeholder="Digite sua senha" autoComplete="password" secureTextEntry value={password} onChangeText={setPassword} />
            <Pressable accessibilityRole="button" hitSlop={8}><Text style={styles.forgot}>Esqueci minha senha</Text></Pressable>
            <Button label="ENTRAR" onPress={handleLogin} />
            <Pressable accessibilityRole="button" hitSlop={8} style={styles.signUp}><Text style={styles.signUpText}>Ainda não tenho conta</Text></Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: colors.background, flex: 1 },
  keyboard: { flex: 1 },
  content: { flex: 1, justifyContent: 'space-between', paddingHorizontal: spacing.lg, paddingVertical: spacing.xl },
  hero: { alignItems: 'center', paddingTop: spacing.lg },
  mark: { alignItems: 'center', backgroundColor: colors.primary, borderRadius: radius.md, height: 54, justifyContent: 'center', marginBottom: spacing.md, width: 54 },
  markText: { color: colors.white, fontSize: 27, fontWeight: '900' },
  brand: { color: colors.primary, fontSize: 26, fontWeight: '900', letterSpacing: 2.2 },
  manifesto: { color: colors.mutedText, fontSize: 16, lineHeight: 25, marginTop: spacing.lg, textAlign: 'center' },
  form: { gap: spacing.md },
  forgot: { alignSelf: 'flex-end', color: colors.primary, fontSize: 14, fontWeight: '700', marginTop: -spacing.sm },
  signUp: { alignItems: 'center', marginTop: spacing.sm, padding: spacing.sm },
  signUpText: { color: colors.primary, fontSize: 14, fontWeight: '700' },
});
