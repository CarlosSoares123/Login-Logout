# Aplicação Frontend em React.js
Este é o código-fonte de uma aplicação frontend desenvolvida em React.js que se integra com um servidor de autenticação Express.js. A aplicação permite que os usuários façam login, verifiquem seu status de autenticação, façam logout e fazer o cadastro. Ela usa a biblioteca Axios para realizar chamadas à API do servidor de autenticação e o React Router Dom para gerenciar as rotas da aplicação.

## Pré-requisitos
Antes de executar a aplicação, certifique-se de ter os seguintes pré-requisitos instalados:

Node.js
npm (Gerenciador de Pacotes Node)

## Instalação
Clone o repositório para a sua máquina local.

Navegue até o diretório da aplicação frontend.

Instale as dependências do projeto executando o seguinte comando:

npm install

## Uso
Para iniciar a aplicação, execute o seguinte comando:

npm run dev
A aplicação estará disponível no navegador.

#Componentes Principais

####App.jsx
O componente principal da aplicação que configura as rotas usando o React Router Dom. Ele redireciona para a página de login ou página inicial com base no estado de autenticação.

#### Home.jsx
A página inicial da aplicação que verifica o status de autenticação do usuário fazendo uma chamada à API do servidor de autenticação. Se o usuário estiver autenticado, exibe as informações do usuário e um botão de logout. Caso contrário, exibe uma mensagem de boas-vindas e um botão de login.

#### Login.jsx
A página de login onde os usuários podem inserir seu email e senha para fazer login. Os dados de login são enviados para o servidor de autenticação via API. Se o login for bem-sucedido, o usuário é redirecionado para a página inicial.

## Package.json
O arquivo package.json lista as dependências do projeto, incluindo React.js, Axios, React Router Dom e outras bibliotecas necessárias.

## Licença
Este projeto está licenciado sob a Licença MIT.

## Autor
Carlos Soares

Sinta-se à vontade para modificar e expandir esta aplicação frontend de acordo com os requisitos do seu projeto.
