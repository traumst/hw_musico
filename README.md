# Musico Candidate Task

## BPM

This branch is dedicated to research on the WebAudio and it's API. To be able to implement all the functionality related to BPM, like adjusting tracks' tempo to the leading track.

The idea is to employ techniques described in [this article](http://joesul.li/van/beat-detection-using-web-audio/)

## Setting up

These instructions will clone the project to your local machine, into the folder you currently are in the terminal/bash.

## Prerequisites

Must already have both `git` and `npm`

## Clone and install dependencies

Open terminal in a folder that you want to download this project to and run following commands to clone from git
and install dependencies of the project
```
git clone https://github.com/traumst/hw_musico.git AlexLitvakTask
cd AlexLitvakTask
npm install
```

## Runnnig the server on localhost:3000

To start the server run
```
npm start
``` 

Once the server is up you can see the component in the browser going to [http://localhost:3000](http://localhost:3000)

Alternatively, to run webpack in an interactive mode run
```
npm run dev
```
This will recompile BUNDLE.JS file before starting the server and every time when changes are saved.

## License

Public Domain