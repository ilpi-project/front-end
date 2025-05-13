# 📱 ILPI App 


---

## 📑 Índice

- [Instalação](#Instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Formato das Requisições](#formato-das-requisições)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)

---

## 🛠️ Instalação

Siga os passos abaixo para instalar e rodar o projeto localmente.

### 1. Clonar o repositório
```bash
git clone https://github.com/ilpi-project/front-end.git
```
### 2. Entrar no diretório do frontend
```bash
cd front-end
```
### 3. Instalar as dependências
```bash
npm install
```
### 4. Entrar no diretório config
```bash
cd src
```
```bash
cd config
```
### 5. Criar o arquivo api.ts baseado no api.example.ts
Linux/Mac/Git Bash
```bash
cp api.example.ts api.ts
```
Windows PowerShell
```powershell
Copy-Item api.example.ts api.ts
```
Windows CMD
```cmd
copy api.example.ts api.ts
```
### 6. No arquivo api.ts, troque localhost pelo IP da máquina
```typescript
export const API_BASE_URL = 'http://SEU_IP_LOCAL:3000';
```
## 🚀 Uso
Volte para a pasta raiz e inicie o servidor
```bash
npm start
```


## ✅ Funcionalidades
- Login e autenticação com JWT
- Cadastro de usuários com foto
- Visualização e gerenciamento de membros vinculados
- Criação e listagem de eventos
- Comunicação com API externa (backend Node.js)
- Armazenamento de token com AsyncStorage
- Navegação com expo-router

## 🧰 Tecnologias

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/mongoose-%2300f.svg?style=for-the-badge&logo=mongoose&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
