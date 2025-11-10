# 📧 Como Configurar o EmailJS no Formulário de Contato

Este guia mostra como configurar o EmailJS para fazer seu formulário de contato funcionar e receber emails.

## 📋 Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em **Sign Up** (Cadastrar)
3. Preencha seus dados ou entre com Google/GitHub
4. Confirme seu email

## 🔧 Passo 2: Configurar o Serviço de Email

1. No painel do EmailJS, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email:
   - **Gmail** (recomendado para teste)
   - Outlook
   - Yahoo
   - Ou outro de sua preferência
4. Clique em **Connect Account**
5. Faça login com sua conta de email
6. Copie o **Service ID** (você vai precisar dele)
   - Exemplo: `service_abc1234`

## 📝 Passo 3: Criar o Template de Email

1. No menu lateral, clique em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template:

### Configurações do Template:

**Template Name:** `portfolio_contact` (ou o nome que preferir)

**Subject:** `Nova mensagem do portfólio - {{subject}}`

**Content (corpo do email):**
```
Olá Kaio,

Você recebeu uma nova mensagem através do seu portfólio!

Nome: {{name}}
Email: {{email}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do portfólio
```

4. Na aba **Settings**, copie o **Template ID**
   - Exemplo: `template_xyz5678`

5. Clique em **Save**

## 🔑 Passo 4: Obter a Public Key

1. No menu lateral, clique em **Account**
2. Vá para a aba **General**
3. Encontre a seção **API Keys**
4. Copie a **Public Key**
   - Exemplo: `AbCdEfGhIjKlMnOp`

## 💻 Passo 5: Atualizar o Código

Abra o arquivo `src/components/Contact.jsx` e substitua as credenciais:

```javascript
await emailjs.sendForm(
  'service_abc1234',      // Seu Service ID aqui
  'template_xyz5678',     // Seu Template ID aqui
  formRef.current,
  'AbCdEfGhIjKlMnOp'      // Sua Public Key aqui
);
```

### Exemplo Completo:

```javascript
await emailjs.sendForm(
  'service_ks7x9qp',      // ← Cole seu Service ID
  'template_portfolio',   // ← Cole seu Template ID
  formRef.current,
  'xYz123AbC456DeF'       // ← Cole sua Public Key
);
```

## 🎯 Passo 6: Testar o Formulário

1. Salve todas as alterações
2. Abra seu portfólio no navegador
3. Vá até a seção **Contato**
4. Preencha o formulário
5. Clique em **Enviar Mensagem**
6. Verifique seu email - você deve receber a mensagem!

## ✅ Verificação

Se tudo estiver correto, você verá:
- ✅ Mensagem de "Enviando..." enquanto processa
- ✅ Mensagem de sucesso: "Mensagem enviada com sucesso!"
- ✅ Formulário limpo após envio
- ✅ Email recebido na sua caixa de entrada

## ⚠️ Solução de Problemas

### Erro: "Failed to send email"
- Verifique se as credenciais estão corretas
- Confirme que o Service ID, Template ID e Public Key foram copiados corretamente
- Certifique-se de que salvou as alterações no código

### Erro: "Service is not connected"
- Volte no EmailJS e reconecte sua conta de email
- Verifique se autorizou o EmailJS a enviar emails

### Não recebi o email
- Verifique a pasta de spam/lixo eletrônico
- Confirme que o email do serviço está correto
- Teste com outro email

## 📊 Limites do Plano Gratuito

O EmailJS oferece gratuitamente:
- ✅ 200 emails por mês
- ✅ Templates ilimitados
- ✅ 2 serviços de email

Para mais emails, considere fazer upgrade ou usar outro serviço.

## 🔒 Segurança

⚠️ **IMPORTANTE:** Nunca compartilhe suas credenciais do EmailJS publicamente!

Se for colocar no GitHub, considere usar variáveis de ambiente:

```javascript
// .env.local
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

```javascript
// No código
await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

## 🎉 Pronto!

Seu formulário de contato agora está funcionando perfeitamente! Toda vez que alguém enviar uma mensagem, você receberá um email com os detalhes.

---

**Dúvidas?** Acesse a [documentação oficial do EmailJS](https://www.emailjs.com/docs/)
