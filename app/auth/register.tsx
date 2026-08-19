import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/ui/TextField';
import { colors, fontFamily, spacing } from '@/constants/theme';
import { authService } from '@/services/auth.service';
export default function Register() { const r=useRouter(); const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [confirm,setConfirm]=useState(''); const submit=async()=>{ if(password!==confirm) return Alert.alert('Senhas diferentes','Confirme a mesma senha.'); try { await authService.signUp(name,email,password); r.replace('/onboarding'); } catch(e){Alert.alert('Não foi possível criar a conta',e instanceof Error?e.message:'Tente novamente.');}}; return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.content}><Text style={s.title}>CRIAR CONTA</Text><View style={s.form}><TextField icon="person-outline" label="NOME" value={name} onChangeText={setName}/><TextField icon="mail-outline" label="E-MAIL" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address"/><TextField icon="lock-closed-outline" label="SENHA" value={password} onChangeText={setPassword} secureTextEntry/><TextField icon="lock-closed-outline" label="CONFIRMAR SENHA" value={confirm} onChangeText={setConfirm} secureTextEntry/><Button label="CRIAR CONTA" onPress={()=>void submit()}/></View></ScrollView></SafeAreaView>; }
const s=StyleSheet.create({safe:{flex:1,backgroundColor:colors.background},content:{padding:spacing.lg,gap:spacing.xl},title:{color:colors.white,fontFamily:fontFamily.bold,fontSize:34},form:{gap:spacing.md}});
