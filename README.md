# Miapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

nuova versione del progetto peso famiglia ma sviluppato in angular
Creata immagine docker, l'immahine si chiama miapp:3.3.4, sia chiaro non è la versione definitiva, ho creato anche una cartella con l'immagine 
per il fingerprint.


nel codice sono presenti link e commenti
aggiornamenti fatti :
-creati file doker per creare l'immagine

-collegamento a mongodb compass

Questa applicazione consente di inserire dei dati e inviarli 
su un database non relazionale, nel file packaage.json ci sono tutte le dipendenze installate


- implemetazione del fingerprint 
- creati i sorgenti per far diventare la web app in un app android e ios


## install angular
npm install angular

## creare un nuovo progetto aprire cmd
ng new mi app

## usare il comando npm su code per installare gli altri package
npm install 'nome pacchetto'

## installare i package a livello globale

npm install 'nome pacchetto' -g

## facendo i commit i package risultano installati quando nei file package-lock.json e package.json compare l'icona modifica (M) e sono in colore giallo

## per far partire l'applicazione usare i seguenti coamndi
npm start
ng serve

## JWT

## JSON Web Token (JWT)

Abstract

   JSON Web Token (JWT) is a compact, URL-safe means of representing
   claims to be transferred between two parties.  The claims in a JWT
   are encoded as a JSON object that is used as the payload of a JSON
   Web Signature (JWS) structure or as the plaintext of a JSON Web
   Encryption (JWE) structure, enabling the claims to be digitally
   signed or integrity protected with a Message Authentication Code
   (MAC) and/or encrypted.

Status of This Memo

   This is an Internet Standards Track document.

   This document is a product of the Internet Engineering Task Force
   (IETF).  It represents the consensus of the IETF community.  It has
   received public review and has been approved for publication by the
   Internet Engineering Steering Group (IESG).  Further information on
   Internet Standards is available in Section 2 of RFC 5741.

   Information about the current status of this document, any errata,
   and how to provide feedback on it may be obtained at
   http://www.rfc-editor.org/info/rfc7519.


