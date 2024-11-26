# **FinanceAI - Gerenciamento de Finanças com IA**

Bem-vindo ao **Finance - AI**, uma plataforma SaaS de gerenciamento de finanças que utiliza inteligência artificial para fornecer insights detalhados sobre suas finanças. Simplifique a organização de suas finanças e tome decisões melhores com informações geradas por IA.

## **Funcionalidades** 🛠️

- **Gerenciamento de Finanças**: Controle completo de receitas, despesas e categorias financeiras.
- **Insights com IA**: Relatórios automatizados e recomendações personalizadas para otimizar suas finanças.
- **Painel Interativo**: Visualize gráficos e resumos em tempo real.
- **Integração com Stripe**: Gerenciamento de assinaturas e pagamentos com segurança.
- **Arquitetura Escalável**: Projetado para suportar múltiplos usuários simultaneamente com alta performance.

## 🚀 **Tecnologias Utilizadas** 🔧

- **Next.js**: Framework para desenvolvimento Full Stack, usado no front-end e back-end com `use server`.
- **React**: Biblioteca para interfaces dinâmicas e reativas.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **TailwindCSS**: Framework CSS para estilização rápida e moderna.
- **ShadCN**: Para construção de componentes reutilizáveis e acessíveis.
- **Prisma**: ORM para interagir com o banco de dados de forma simples.
- **PostgreSQL**: Banco de dados relacional para armazenar dados.
- **NeonDB**: Serviço de hospedagem para PostgreSQL.
- **Clerk**: Gerenciamento de autenticação e segurança.
- **Stripe**: Processamento de pagamentos e assinaturas.
- **React Markdown**: Renderização de texto em formato Markdown.
- **Docker**: Para ambientes consistentes e portabilidade.

## **Instalação** ⚙️

### **Pré-requisitos** 📝

- Node.js >= 16.0
- Docker
- Conta no NeonDB, Clerk e Stripe para configurações adicionais.

### **Configuração de Variáveis de Ambiente** 🔑

1. Configure as variáveis de ambiente com base no exemplo abaixo:

```env
# NeonDB (para usar NeonDB como banco de dados remoto)
DATABASE_URL=""

# Docker (para usar PostgreSQL local via Docker)
DATABASE_URL=""

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""

# Stripe
STRIPE_PREMIUM_PLAN_PRICE_ID="p"
STRIPE_SECRET_KEY=""
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
STRIPE_WEBHOOK_SECRET=""
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=""

# OpenAI (opcional para geração de insights avançados)
OPENAI_API_KEY=""

# URL da aplicação
APP_URL="http://localhost:3000"
```

### **Escolha do Banco de Dados** 🗃️

- Para usar o **NeonDB**, configure a variável `DATABASE_URL` com o URL fornecido pela NeonDB.
- Para usar o banco de dados **localmente via Docker**, certifique-se de que o container PostgreSQL está ativo e preencha a variável `DATABASE_URL` com a string de conexão correspondente ao seu ambiente local.

### **Passo a Passo de Instalação** 🛠️

1. Clone este repositório:
   ```bash
   git clone https://github.com/Rianxavier/finance-ai.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd finance-ai
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente conforme descrito acima.
5. Inicie o banco de dados (caso esteja usando Docker):
   ```bash
   docker-compose up -d
   ```
6. Execute as migrações do Prisma:
   ```bash
   npx prisma migrate dev
   ```
7. Inicie o servidor:
   ```bash
   npm run dev
   ```

### **Acesse o aplicativo** 🌐

Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000).
