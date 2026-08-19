import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/ui/TextField';
import { colors, fontFamily, spacing } from '@/constants/theme';
import { authService } from '@/services/auth.service';

export function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try { await authService.signIn(email, password); router.replace('/onboarding'); }
    catch (error) { Alert.alert('Não foi possível entrar', error instanceof Error ? error.message : 'Tente novamente.'); }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding', default: undefined })} style={styles.keyboard}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <View style={styles.hero}>
            <Text accessibilityLabel="RezFlow" style={styles.brand}><Text style={styles.brandRez}>REZ</Text><Text style={styles.brandFlow}>FLOW</Text></Text>
            <View style={styles.principles}>
              <Text style={styles.principle}><Text>CONHECER A </Text><Text style={styles.accent}>DEUS</Text></Text>
              <Text style={styles.principle}><Text>ENCONTRAR </Text><Text style={styles.accent}>LIBERDADE</Text></Text>
              <Text style={styles.principle}><Text>DESCOBRIR </Text><Text style={styles.accent}>PROPÓSITO</Text></Text>
              <Text style={styles.principle}><Text>FAZER A </Text><Text style={styles.accent}>DIFERENÇA</Text></Text>
            </View>
          </View>

          <View style={styles.form}>
            <TextField icon="mail-outline" label="E-MAIL" placeholder="seu@email.com" autoCapitalize="none" autoComplete="email" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <TextField icon="lock-closed-outline" label="SENHA" placeholder="Digite sua senha" autoComplete="password" secureTextEntry value={password} onChangeText={setPassword} />
            <Pressable accessibilityRole="button" hitSlop={8} onPress={() => router.push('/auth/forgot-password')}><Text style={styles.forgot}>Esqueci minha senha</Text></Pressable>
            <Button label="ENTRAR" onPress={handleLogin} />
            <View style={styles.or}><View style={styles.rule} /><Text style={styles.orText}>OU</Text><View style={styles.rule} /></View>
            <Button leftAdornment={<FontAwesome color={colors.white} name="google" size={16} />} label="ENTRAR COM GOOGLE" onPress={() => undefined} variant="secondary" />
            <View style={styles.signUp}><Text style={styles.signUpPrompt}>Ainda não tenho conta</Text><Pressable accessibilityRole="button" hitSlop={8} onPress={() => router.push('/auth/register')}><Text style={styles.signUpLink}>CRIAR CONTA</Text></Pressable></View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: colors.background, flex: 1 },
  keyboard: { flex: 1 },
  content: { flexGrow: 1, justifyContent: 'space-between', paddingHorizontal: spacing.lg, paddingVertical: spacing.xl, gap: spacing.xxl },
  hero: { paddingTop: spacing.sm },
  brand: { alignSelf: 'center', fontFamily: fontFamily.bold, fontSize: 53, letterSpacing: -1.5, lineHeight: 58 },
  brandRez: { color: colors.white },
  brandFlow: { color: colors.primary },
  principles: { borderLeftColor: colors.primary, borderLeftWidth: 3, gap: 1, marginTop: spacing.xl, paddingLeft: spacing.md },
  principle: { color: colors.white, fontFamily: fontFamily.semibold, fontSize: 17, letterSpacing: 0.2, lineHeight: 23 },
  accent: { color: colors.primary },
  form: { gap: spacing.md },
  forgot: { alignSelf: 'flex-end', color: colors.secondary, fontSize: 14, fontWeight: '700', marginTop: -spacing.sm },
  or: { alignItems: 'center', flexDirection: 'row', gap: spacing.md, marginVertical: spacing.xs },
  rule: { backgroundColor: colors.border, flex: 1, height: StyleSheet.hairlineWidth },
  orText: { color: colors.mutedText, fontFamily: fontFamily.medium, fontSize: 13, letterSpacing: 1 },
  signUp: { alignItems: 'center', flexDirection: 'row', gap: spacing.sm, justifyContent: 'center', marginTop: spacing.sm, paddingVertical: spacing.sm },
  signUpPrompt: { color: colors.mutedText, fontSize: 14 },
  signUpLink: { color: colors.primary, fontFamily: fontFamily.semibold, fontSize: 14, letterSpacing: 0.6 },
});
