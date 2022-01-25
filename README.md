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

npm install --save-dev babel-loader babel-core babel-preset-env
npm install --save-dev  babel-loader @babel/core @babel/preset-env

## Babel Setup


```
module: {
    /// configuring rules for babel
    rules: [
        {
            /// which loader to use
            use: 'babel-loader',
            /// test needs regular expressions.
            test: /\.js$/  // only use babel in js files 
        }
    ]
}
```

create .babelrc to tell what to run 

```
{
    "presets": ["babel-preset-env"]
}
```
babel  transform arrow function (ES2015) to a function ES5 in bundle

## Refactor to Es2015

Its easy to refactor from commonJs to Es2015

1) change require fpr import 

2) module.export to export 

```
import sum from './sum' /// ES2015

const total = sum (10,5);

console.log(total);
```

## Style and css loaders 

1) created image_viewer.js
2) Imported from index.js 
3) now image_viewer will be on bundle.js
4) adding js_modules\src\image_viewer.js
5) importing on js_modules\src\image_viewer.js
6) need css-loader and style-loader 

npm install --save-dev css-loader style-loader 

- takes css manually and injects in html 
- loading css in a separated file is faster than loading injected in html file 

## Separated css  

npm install --save-dev extract-text-webpack-plugin@2.0.0-beta.4



