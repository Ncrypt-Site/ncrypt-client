![nCrypt Client test](https://github.com/Ncrypt-Site/ncrypt-client/workflows/nCrypt%20Client%20test/badge.svg)

# nCrypt Web App

## About

nCrypt is a simple application that helps you create temporary secure
notes, with support of auto-destruct note. Your notes can live up to one month
on our servers, or once the receiver opens them, gets deleted automatically.
You can easily do that with nCrypt. We use **AES256** to encrypt your data in the client-side web application,
and we will store the encrypted data on our server when the receiver opens the note, it will be decrypted in client-side as well, we can't see your data in any way.

## Usage

Just check [our website](https://ncrypt.site) and start using it.

## Run on your system

Open terminal and clone the repository and open project root folder

```shell
git clone https://github.com/Ncrypt-Site/ncrypt-client.git
cd ncrypt-client
```

Install dependencies using Yarn or NPM

```shell
yarn install
```

Or

```shell
npm install
```

Then you can start the project by runing

```shell
yarn start
```

Or if you using NPM

```shell
npm run start
```
