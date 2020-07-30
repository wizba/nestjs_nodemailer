<!-- <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p> -->


  <!-- <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p> -->

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

<!-- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. -->
using nestjs and nodemailer to send email

# Steps to run the app

```bash
 (1)Download or clone the project from git
```
## (2)In the directory of the project run the following commands ->
 ``` 
  $npm install
  $npm i nodemailer --save
  $npm i --save @nestjs/config
  ```
## (3) create a .env file in the root directory
```
put the email and passwor in your .env file as follow -
  EMAIL = someone@gmail.com
  PASSWORD = password
```
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

