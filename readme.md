## About the project
Welcome to the sovtech challenge that has  a backend and a frontend which interact with each other through the starwars API.Find more info about star wars api from [here](https://swapi.dev/).


## Description
 The backend is a NodeJS application which interacts with the starwars API while the frontend is a ReactJS application which interacts with the backend consuming the developed endpoints.

## Project Setup

- ### Backend
  - git clone the project from the github repo
  - cd into the server folder
  - set up the project env variables by creating a .env file from the .env.example file and copying the env vars below.
  ```bash

  API_URL="https://swapi.dev/api/"
  PORT=8080
  ```
  - Install the project dependencies by running `npm run install`
  - Run the development server by running `npm run run dev`
  - Open the application in browser by visiting port `http://localhost:8080/` which will open the apollo graphql playground.
  - Run the project tests by running `npm run test`
  - **NB.** The API_URL is the url of the starwars API which is public but this endpoint wouldn't be added in the project readme file and the project use nodes v14.15.3 LTS.


  #### Dependencies

  - [typescript](https://typescript.org/)
  - [ts-node](https://www.npmjs.com/package/ts-node)
  - [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
  - node v14.15.3 LTS
  - apollo-datasource-rest
  - apollo-server-express
  - graphql

- ### Frontend
  - After the repo has been cloned from github.
  - cd into the client folder
  - Install the project dependencies by running `npm or yarn install`
  - Run the development server by running `npm run start or yarn  start`
  - Open the application will open in the browser on port `http://localhost:3000/` which will open the home route.

  #### Dependencies

  - [typescript](https://typescript.org/)
  - React v18.0.0
  - React Router
  - apollo-client
  - graphql
  - node v14.15.3 LTS
