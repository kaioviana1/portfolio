# 🚀 Como Publicar seu Portfólio no GitHub e Visualizar Online

Este guia mostra como colocar seu portfólio no GitHub e hospedar gratuitamente usando GitHub Pages ou Vercel.

---

## 📋 Pré-requisitos

- [ ] Conta no GitHub ([criar conta](https://github.com/join))
- [ ] Git instalado no computador ([baixar Git](https://git-scm.com/downloads))

---

## 🔧 PARTE 1: Preparar o Projeto

### Passo 1: Criar arquivo .gitignore

Crie um arquivo chamado `.gitignore` na raiz do projeto (se ainda não existir):

```
# Dependencies
node_modules/

# Build
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

### Passo 2: Configurar o Vite para deploy

Abra `vite.config.js` e adicione a propriedade `base`:

```javascript
export default {
  base: '/portfolio/',  // Nome do seu repositório
  plugins: [react()],
}
```

---

## 📦 PARTE 2: Subir para o GitHub

### Passo 1: Inicializar o Git (se ainda não iniciou)

Abra o terminal na pasta do projeto e execute:

```bash
git init
```

### Passo 2: Adicionar os arquivos

```bash
git add .
```

### Passo 3: Fazer o primeiro commit

```bash
git commit -m "Primeiro commit - Portfólio pessoal"
```

### Passo 4: Criar repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique no **+** no canto superior direito
3. Selecione **New repository**
4. Configure:
   - **Repository name:** `portfolio` (ou o nome que preferir)
   - **Description:** "Meu portfólio pessoal - Desenvolvedor Full Stack"
   - Deixe como **Public** ✅
   - **NÃO** marque "Initialize this repository with a README"
5. Clique em **Create repository**

### Passo 5: Conectar repositório local com GitHub

Copie os comandos que o GitHub mostra e execute no terminal:

```bash
git remote add origin https://github.com/SEU_USUARIO/portfolio.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub!**

---

## 🌐 PARTE 3: Publicar Online (Escolha UMA opção)

## OPÇÃO A: GitHub Pages (Grátis - Recomendado)

### Passo 1: Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### Passo 2: Adicionar scripts no package.json

Abra `package.json` e adicione estas linhas em `"scripts"`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Passo 3: Fazer deploy

```bash
npm run deploy
```

### Passo 4: Ativar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione a branch `gh-pages`
5. Clique em **Save**

🎉 **Seu site estará disponível em:**
```
https://SEU_USUARIO.github.io/portfolio/
```

**Aguarde 2-5 minutos** para o site ficar online!

---

## OPÇÃO B: Vercel (Mais Rápido - Recomendado para Produção)

### Passo 1: Criar conta na Vercel

1. Acesse [https://vercel.com](https://vercel.com)
2. Clique em **Sign Up**
3. Entre com sua conta do GitHub

### Passo 2: Importar projeto

1. No painel da Vercel, clique em **Add New Project**
2. Clique em **Import Git Repository**
3. Selecione o repositório `portfolio`
4. Clique em **Import**

### Passo 3: Configurar e fazer deploy

1. **Framework Preset:** Vite será detectado automaticamente
2. **Build Command:** `npm run build` (já configurado)
3. **Output Directory:** `dist` (já configurado)
4. Clique em **Deploy**

🎉 **Seu site estará disponível em:**
```
https://portfolio-SEU_USUARIO.vercel.app
```

**Deploy leva 1-2 minutos!**

---

## OPÇÃO C: Netlify (Alternativa Popular)

### Passo 1: Criar conta no Netlify

1. Acesse [https://netlify.com](https://netlify.com)
2. Clique em **Sign Up**
3. Entre com sua conta do GitHub

### Passo 2: Importar projeto

1. Clique em **Add new site** → **Import an existing project**
2. Escolha **GitHub**
3. Selecione o repositório `portfolio`

### Passo 3: Configurar build

1. **Build command:** `npm run build`
2. **Publish directory:** `dist`
3. Clique em **Deploy site**

🎉 **Seu site estará disponível em:**
```
https://random-name-123.netlify.app
```

Você pode personalizar o domínio depois!

---

## 🔄 Atualizando o Site

### Para GitHub Pages:

Sempre que fizer alterações:

```bash
git add .
git commit -m "Descrição das alterações"
git push
npm run deploy
```

### Para Vercel/Netlify:

Apenas faça push para o GitHub:

```bash
git add .
git commit -m "Descrição das alterações"
git push
```

O deploy acontece **automaticamente**! 🎉

---

## 📝 Comandos Git Úteis

### Ver status dos arquivos
```bash
git status
```

### Ver histórico de commits
```bash
git log --oneline
```

### Criar nova branch
```bash
git checkout -b nome-da-branch
```

### Voltar para branch main
```bash
git checkout main
```

### Atualizar repositório local
```bash
git pull
```

---

## 🎨 Personalizações Importantes Antes de Publicar

### 1. Atualizar informações pessoais

- ✅ Trocar links de GitHub/LinkedIn/Email em `Hero.jsx`, `Contact.jsx` e `Footer.jsx`
- ✅ Atualizar informações de contato em `Contact.jsx`
- ✅ Adicionar seus projetos reais em `Projects.jsx`
- ✅ Trocar imagens dos projetos

### 2. Configurar EmailJS

- ✅ Seguir o guia `COMO_CONFIGURAR_EMAILJS.md`
- ✅ Adicionar suas credenciais no `Contact.jsx`

### 3. SEO e Metadata

Edite o arquivo `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Adicione isso: -->
  <meta name="description" content="Portfólio de Kaio Viana - Desenvolvedor Full Stack especializado em React, Node.js e TypeScript" />
  <meta name="author" content="Kaio Viana" />
  <meta name="keywords" content="desenvolvedor, full stack, react, node.js, portfolio" />
  
  <!-- Open Graph para redes sociais -->
  <meta property="og:title" content="Kaio Viana - Desenvolvedor Full Stack" />
  <meta property="og:description" content="Portfólio profissional com projetos e habilidades" />
  <meta property="og:type" content="website" />
  
  <title>Kaio Viana | Desenvolvedor Full Stack</title>
</head>
```

---

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Todas as informações pessoais atualizadas
- [ ] Links de redes sociais funcionando
- [ ] EmailJS configurado (se quiser formulário funcional)
- [ ] Imagens dos projetos substituídas
- [ ] Projeto testado localmente (`npm run dev`)
- [ ] Build funcionando sem erros (`npm run build`)
- [ ] Repositório no GitHub criado
- [ ] Deploy realizado com sucesso
- [ ] Site acessível online

---

## 🆘 Solução de Problemas

### Erro: "gh-pages not found"
```bash
npm install --save-dev gh-pages
```

### Erro: "permission denied" no Git
Configure suas credenciais:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Site não carrega CSS/JS
Verifique se o `base` no `vite.config.js` está correto:
- GitHub Pages: `base: '/portfolio/'`
- Vercel/Netlify: `base: '/'`

### Erro ao fazer push
```bash
git push -u origin main --force
```

---

## 🎉 Parabéns!

Seu portfólio está no ar! 🚀

### Próximos Passos:

1. **Compartilhe** seu portfólio nas redes sociais
2. **Adicione** o link no seu LinkedIn
3. **Atualize** regularmente com novos projetos
4. **Monitore** o tráfego (use Google Analytics se quiser)

---

## 📚 Links Úteis

- [Documentação do Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

---

**Criado por:** Kaio Viana | **Última atualização:** Novembro 2025
