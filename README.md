# typescript-101
ToDo turorial getting started with Typescript

This project is based on the following tutorials/docs
- [https://github.com/metadatadriven/typescript-101.git](https://www.youtube.com/watch?v=jBmrduvKl5w)

## Init Project Environment

First off, Create a template `index.html` file based on [boilerplate](https://www.freecodecamp.org/news/html-starter-template-a-basic-html5-boilerplate-for-index-html/)

Now, init the environment - first init node then typescript:
```sh
$ npm init -y # this creates the default package.json
$ npm i --save-dev typescript # install typescript in devDependencies
```
Now we can init the typescript environment
```sh
$ npx tsc --init
```

This creates the `tsconfig.json` with all the typescript [config options](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) (mostly commented out)

Now install a bundler and create the project (here we are using [snowpack](https://www.snowpack.dev/) - there are plenty [other bundlers](https://byby.dev/web-bundlers) in use)

```sh
$ npm i create-snowpack-app
$ npx create-snowpack-app @snowpack/app-template-blank-typescript --force
```

## Start the server

Now we have an empty typescript project that we can run:
```sh
$ npm start
```

## Node modules

