# PWA SB300

Este repositório contém um projeto base criado com Next.js e configurado para funcionar como um Progressive Web App (PWA).

## Como iniciar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

O site ficará disponível em [http://localhost:3000](http://localhost:3000).

Para gerar o build de produção:

```bash
npm run build
npm start
```

## Scripts disponíveis

- `npm run dev` – inicia o modo de desenvolvimento.
- `npm run build` – gera a versão de produção.
- `npm start` – executa o servidor após o build.
- `npm run lint` – executa o ESLint.

## Dependências principais

- **next**: 15.3.5
- **react**: 19.0.0
- **react-dom**: 19.0.0
- **tailwindcss**: ^4
- **@tailwindcss/postcss**: ^4
- **typescript**: ^5
- **eslint**: ^9

Consulte `package.json` para a lista completa.

## Orientações para o Codex da OpenAI

- Execute `npm install` antes de rodar qualquer script.
- Utilize `npm run lint` para verificar o estilo de código.
- Use `npm run build` para garantir que o projeto compila sem erros.
- Abra pull requests descrevendo claramente as mudanças realizadas.
