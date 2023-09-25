# README.md

## Servidor de Autenticação Express.js

Este é um servidor de autenticação Express.js simples que fornece funcionalidades de login e logout. Ele utiliza o MySQL como banco de dados para autenticação de usuários, JWT (Tokens JSON Web) para gerenciamento de sessões de usuário e Bcrypt para fazer hash de senhas. O servidor também inclui uma configuração de CORS (Compartilhamento de Recursos de Origem Cruzada) para permitir solicitações de uma origem específica.

### Pré-requisitos

Antes de executar o servidor, certifique-se de ter os seguintes pré-requisitos instalados:

- Node.js
- MySQL
- npm (Gerenciador de Pacotes Node)

### Instalação

1. Clone o repositório para a sua máquina local.

2. Instale os pacotes Node.js necessários executando o seguinte comando:

   npm install

Crie um banco de dados MySQL chamado signup e configure as configurações de conexão do banco de dados no arquivo
index.js:


const db = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
});
## Para iniciar o servidor, execute o seguinte comando:

npm run dev

O servidor estará em execução na porta 8001, e você verá a mensagem "Servidor Rodando na porta 8001" no console.

## Pontos de Extremidade

#### GET / - Rota Principal

Requer autenticação (JWT).
Retorna informações do usuário se autenticado.

#### POST /login - Login do Usuário

Aceita dados JSON contendo email e password.
Valida as credenciais do usuário no banco de dados.
Gera um token JWT após o login bem-sucedido.
Armazena o token como um cookie.
Retorna uma mensagem de sucesso.

#### GET /logout - Logout do Usuário

Limpa o cookie do token JWT.
Retorna uma mensagem de sucesso.
Autenticação
A autenticação é implementada usando JWT (Tokens JSON Web). Para acessar rotas protegidas (por exemplo, /), você precisa incluir um token JWT válido nos cookies da solicitação. O servidor usa a chave secreta "our-jsonwebtoken-secret-key" para geração e verificação de tokens.

## Configuração de CORS
O servidor está configurado para permitir solicitações da seguinte origem:

http://localhost:5173
O servidor aceita tanto os métodos POST quanto GET e suporta credenciais (cookies) para solicitações de origem cruzada.

## Package.json
O arquivo package.json lista as dependências do projeto, incluindo Express.js, MySQL, JWT e outros pacotes necessários. Você pode instalar essas dependências usando npm install.

## Autor
Carlos Soares

Sinta-se à vontade para modificar e expandir este servidor de autenticação de acordo com os requisitos do seu projeto.