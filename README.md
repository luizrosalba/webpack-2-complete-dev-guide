# webpack-2-complete-dev-guide
webpack-2-the-complete-developers-guide
https://github.com/StephenGrider/WebpackCasts
https://discord.gg/vvcyvjDkdC


# SST 

- Server side templating back end server creates an HTML document and SENDS it to the user
- Less popular now 
- less js code 

## SPA 

- Single Page App server sends a bare bones HTML doc to the user. Js runs ON THE USER to assemble a full Webpage 
- More popular now 
- lots of Js code

## JS Module 

A small JS File with JS code to organize large code in many files. 

Problems of several files: 

1) Load Order 
2) Slow load from multiple files

## Webpack

Join lots of small js modules to a single bundle

We will create two modules and link them using webpack

js_modules

index.js require sum.js

## Module Systems: 

- CommonJS  
Maintainer by node 

require, module.exports

- AMD 
Asynchronous module definition 

require, define

- ES2015
Developers

import, export 

## install webpack

npm install --save-dev webpack@2.2.0-rc.0

- always better to use local than global install 

## configure 

webpack.config.js (required)

1) Entry property 

- file thats boots the application 
- in our project index.js


## Runnning webpack 

Adding build scripts to package.json

npm run build 

## what is inside bundle

bundle is larger than the sum of two js files 


comments and my functions 

points to entrypoint index in function array 

## Running app in browser 

- created index.html 
- added script to load bundle

## Handling Assets 

- Loaders 

Babel : Turns ES2015/6/7 code in ES5 Code 

3 modules to make babel work : 

1) babel-loader : babel how to work with webpack
2) babel-core: Knows how to take in code, parse, generate output files  
3) babel-preset-env: Ruleset for telling babel what pieces of ES2015/6/7 syntax to look for and how to turn into ES5





