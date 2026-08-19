import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/Button';
import { colors, fontFamily, spacing } from '@/constants/theme';
export default function Onboarding(){const r=useRouter();return <SafeAreaView style={s.safe}><View style={s.content}><Text style={s.title}>Bem-vindo ao RezFlow</Text><Text style={s.text}>Vamos configurar seu acesso.</Text><Text style={s.question}>Você já faz parte de uma igreja?</Text><Button label="SIM, JÁ FAÇO PARTE" onPress={()=>r.push('/onboarding/find-church')}/><Button label="QUERO CRIAR UMA IGREJA" onPress={()=>r.push('/onboarding/create-church')} variant="secondary"/></View></SafeAreaView>};const s=StyleSheet.create({safe:{flex:1,backgroundColor:colors.background},content:{flex:1,gap:spacing.lg,justifyContent:'center',padding:spacing.lg},title:{color:colors.white,fontFamily:fontFamily.bold,fontSize:36},text:{color:colors.mutedText,fontSize:17},question:{color:colors.white,fontFamily:fontFamily.semibold,fontSize:20,marginTop:spacing.lg}});
