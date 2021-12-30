# Weatherlog
Master thesis in frontend developer course, collaboration with [Oliver Nygren](https://github.com/olivernygren)

## Run app
This command will start both react app and server.

run in terminal: npm start

## Config
React: http://localhost:3000/

Server: http://localhost:5000/

They are connected with proxy in the client/package.json

"proxy": "http://localhost:5000"

## Deploy to Heroku
- Change in package.json in ROOT
- From - "start": "npm-run-all --parallel client server"
- To - "start": "node server"
- Run - npm run client:build
- Push main to git
- Run - git push heroku HEAD:master
- Change back "start" for liveview coding
- See changeLog for heroku - heroku logs --tail
