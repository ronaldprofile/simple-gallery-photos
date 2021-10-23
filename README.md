<h1 align="center">Gallery Photos</h1>

<img src="https://ik.imagekit.io/gczsuhmv3/avanz/screenshot-rocks_aMnIpE5M2L.png?updatedAt=1635007260610" alt="screenshot">

## 💻 Projeto

aplicação simples que faz upload de imagens para o storage do firebase.

## 🚀 Tecnologias

- ReactJS
- Firebase
- Typescript

## 😍 Detalhes

- Para rodar o projeto na sua máquina será preciso que você crie seu próprio projeto firebase e configure seu cloud storage.

- Depois dessa etapa você precisa configurar as regras do seu storage, por padrão você vai ver algo parecido com isso:
  ```js
    rules_version = '2';
    service firebase.storage {
      match /b/{bucket}/o {
        match /{allPaths=**} {
          allow read, write: if request.auth != null;
        }
      }
    }
  ```
  o que você precisa mudar é essa condição: `if request.auth != null`. Depois de ter feito isso basta **publicar essa atualização**

- Sua próxima tarefa é criar uma pasta chamada **images** na seção **files**, e pronto nosso storage está configurado.
- Mas depois disso tudo é preciso que você adicione suas credenciais do projeto firebase no arquivo **.env.EXAMPLE**, só assim ele vai funcionar corretamente.
  Você vai ver algo assim:
  ```js
  VITE_APP_KEY=
  VITE_AUTH_DOMAIN=
  VITE_PROJECT_ID=
  VITE_STORAGE_BUCKET=
  VITE_MESSAGING_SENDER_ID=
  VITE_APP_ID=
  ```
  basta adicionar seus resepctivos valores.

## ✨ Execute o projeto

- clone o repo: `git clone https://github.com/ronaldprofile/simple-gallery-photos`
- instale as dependências do projeto: `yarn`
- rode o servidor: `yarn dev`
- veja a aplicação funcionado: [localhost:3000]()
