# typescript-101 - Getting started with React

Based on the [Learn React in 30 minutes](https://youtu.be/hQAHSlTtcmY) youtube tutorial

This is not using Typescript - just trying to dial-in the key concepts of [React](https://react.dev/)

## Prerequisites

- Folder with all lower case and no-spaces-in-name
- node.js installed

## Create a react app

Use `npx create-react-app .` to create react app in current folder

NOTE that doing this in the root folder complains about the gitpod and vscode folders, so create an
sub-folder for the app. Once run we get:
```
Success! Created my-react-app at /workspace/typescript-101/my-react-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd /workspace/typescript-101/my-react-app
  npm start

Happy hacking!
```

This creates the following React app folder structure
```
my-react-app
├── node_modules # Lots of node modules installed here
├── public       # contains basic index.html with one root div
└── src          # all source code - see index.js
```

Along with `package.json`

## Starting a React App

Use `npm start` to start the app

## React VS Code extension

Install [es7-react-js-snippets](https://open-vsx.org/extension/dsznajder/es7-react-js-snippets) VS Code extension then
use the `rfc` shortcut in an empty file to expand boilerplate for a React Functional Component

## Add state to a react component

```js
import { useState } from 'react';
```

This will import the state hook

## 
