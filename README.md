# RezFlow

Aplicativo mobile para a organização de igrejas — escalas, repertórios, músicas, equipes e agenda.

## Stack

- Expo + React Native
- TypeScript
- Expo Router

## Começar

```bash
npm install
npm start
```

Copie `.env.example` para `.env` e configure `EXPO_PUBLIC_SUPABASE_URL` e `EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Nunca use a service role key no aplicativo.

Use `npm run ios` ou `npm run android` para abrir no simulador/dispositivo compatível.

## Scripts

```bash
npm run typecheck
npm run lint
```

## Estrutura

```text
app/          # Rotas Expo Router
components/   # Componentes reutilizáveis
features/     # Módulos de produto por domínio
constants/    # Tema e constantes compartilhadas
hooks/        # Hooks compartilhados
lib/          # Clientes e integrações de baixo nível
services/     # Adaptadores de serviços externos
types/        # Tipos de domínio
assets/       # Recursos visuais
```

## Próximos domínios

A fundação está preparada para Supabase Auth, igrejas, campus, usuários, DMs, equipes, eventos, escalas, músicas, repertórios, notificações e Google Calendar. Essas integrações ainda não foram implementadas.
Aplicativo de organização de igrejas
