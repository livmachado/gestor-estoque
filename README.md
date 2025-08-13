# 📦 Sistema de Gestão de Estoque

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)  
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)  
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)  
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)  
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?logo=prisma)  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.x-336791?logo=postgresql)  

Um sistema completo para **gestão de estoque**, permitindo cadastro de produtos, controle de entradas e saídas, relatórios de baixo estoque e histórico de movimentações.  
Back-end com **Node.js, Express, TypeScript, Prisma ORM e PostgreSQL (Docker)** e front-end com **React, Tailwind CSS e TypeScript**.

---

## 🚀 Funcionalidades

### Produtos
- 📌 Cadastro de novos produtos
- 📄 Listar todos os produtos
- 🗑 Deletar produtos
- 🔍 Visualizar detalhes de um produto (incluindo histórico de movimentações)

### Movimentações
- 📥 **Entrada de estoque** (compra)
- 📤 **Saída de estoque** (venda)

### Relatórios
- 📉 Listar produtos com baixo estoque (≤ 5 unidades)
- 📜 Histórico completo de movimentações por produto


---

## 🛠 Tecnologias

**Back-end**  
- Node.js  
- Express  
- TypeScript  
- Prisma ORM  
- PostgreSQL (Docker)  
- Yarn (gerenciador de pacotes)  

**Front-end**  
- React  
- Tailwind CSS  
- TypeScript  
- npm (gerenciador de pacotes)  

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado:  
- [Node.js](https://nodejs.org/)  
- [Docker](https://www.docker.com/) e Docker Compose  
- [Git](https://git-scm.com/)  

---

## 🔧 Como rodar o projeto

1️⃣ **Clone o repositório**  
```bash
git clone https://github.com/livmachado/gestor-estoque.git
```
2️⃣ Entre na pasta do projeto
```bash
cd gestor-estoque
```
3️⃣ **Instale as dependências do back-end (Yarn)**
```bash
cd backend
yarn install
```
4️⃣ **Instale as dependências do front-end (npm)**
```bash
cd ../frontend
npm install
```
5️⃣ **Suba o banco de dados com Docker**
```bash
docker-compose up -d
```
6️⃣ **Rode as migrations do Prisma**
```bash
cd backend
yarn prisma migrate dev
```
7️⃣ **Inicie o servidor back-end**
```bash
yarn dev
```
8️⃣ **Inicie o front-end**
```bash
cd ../frontend
npm run dev
```
## 📌 Próximos passos

- 🔑 Autenticação de usuários
- ✏ Edição de produtos
- 📊 Relatórios e gráficos de estoque
- 🔎 Filtros e busca avançada

## 📄 Licença
Este projeto está sob a licença MIT.
