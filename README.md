# 📱 ILPI App 
ILPI App é uma plataforma digital desenvolvida para facilitar a gestão e o acompanhamento de idosos em Instituições de Longa Permanência. O aplicativo oferece funcionalidades voltadas a familiares, cuidadores e administradores, promovendo um cuidado mais eficiente e humanizado.

---

## 📑 Índice

- [Instalação](#Instalação)
- [Uso](#uso)
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

**Dica:** Para acessar o aplicativo, use as seguintes credenciais de exemplo:

- **Email:** `joao@gmail.com`
- **Senha:** `12345`


## ✅ Funcionalidades
- Login e autenticação com JWT
- Cadastro de usuários com foto
- Visualização e gerenciamento de membros vinculados
- Criação e listagem de eventos
- Comunicação com API externa (backend Node.js)
- Armazenamento de token com AsyncStorage
- Navegação com expo-router

## 🧰 Tecnologias

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
