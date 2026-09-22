# Site Odonto Center

Site institucional da Odonto Center Chapecó, desenvolvido com Next.js, React, TypeScript e Tailwind CSS. O projeto possui experiências específicas para desktop e mobile, integração com WhatsApp, localização no Google Maps e avaliações.

## Requisitos

- Node.js 22
- npm 10 ou superior

## Executar localmente

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Comandos

```bash
npm run dev        # ambiente de desenvolvimento
npm run typecheck  # validação TypeScript
npm run lint       # validação ESLint
npm run build      # build de produção
npm run start      # servidor do build de produção
npm run check      # executa todas as validações
```

## Variáveis de ambiente

O site funciona sem variáveis obrigatórias. O arquivo `.env.example` documenta credenciais opcionais para uma futura integração dinâmica com avaliações do Google. Nunca publique arquivos `.env` reais ou tokens no GitHub.

## Publicar no GitHub

O repositório já está configurado para ignorar dependências, caches, builds e credenciais locais.

```bash
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Substitua a URL pelo repositório criado na sua conta do GitHub.

## Hospedar na Vercel

1. Importe o repositório do GitHub na Vercel.
2. Confirme o framework `Next.js`.
3. Mantenha o comando de instalação como `npm ci`.
4. Mantenha o comando de build como `npm run build`.
5. Não configure diretório de saída; a Vercel detecta o build do Next.js automaticamente.
6. Publique o projeto.

Nenhuma variável de ambiente é necessária para a versão atual.

## Estrutura principal

- `app/`: páginas, layout, estilos globais e rota de avaliações.
- `components/`: componentes visuais, seções desktop/mobile e elementos de interface.
- `data/`: tratamentos, localização e conteúdo de avaliações.
- `lib/`: links, configuração e utilitários.
- `public/`: imagens e arquivos estáticos.

## Clínica

- Odonto Center Chapecó
- Av. São Pedro, E908 — São Cristóvão, Chapecó/SC
- WhatsApp: (49) 99192-7373
