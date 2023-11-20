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

Configure Typescript to transpile to the `dest` folder - see commit 