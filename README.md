# Weatherlog

Master thesis in frontend developer course, collaboration with [Oliver Nygren](https://github.com/olivernygren)


Access the site [here](https://daily-weatherlog.herokuapp.com/)

## What is Weatherlog
Weatherlog is a webapplication that you can create your own weatherdiary. But right now it is only available in swedish. 
Like a regular diary you have days you can browse through, the same goes for this app.
You have a monthly view where you can browse the months with a diagram view with data from temperature and precipitation and a standard listview.

## Who is it for
It is for those who like to track the weather, not with an API but with the data at their home. If they have a weather station they have a lot of data that they can use. 
And if schools wanna use it to track the weather for a while it would be wonderful to see.

## Run app

First run "npm i" in root
Second cd in to /client and runt "npm i"

cd back to root 
Package.json in root the start command need to be: 
"start": "npm-run-all --parallel client server"

This command will start both react app and server.
run in terminal: npm start

## Techstack

ReactJS(Typescript, MUI)

Node.js

Express

MongoDB

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
