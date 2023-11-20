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

NOTE the example of how to do this starts at [17:00 in the youtube](https://youtu.be/jBmrduvKl5w?si=mlYExiBswTwBnOcy&t=1021) video

Add modules to the project using `npm install`
```sh
$ npm i uuid
```

Now the module can be imported into typescript, for example:
```typescript
import  {v4 as uuidV4} from "uuid"
```

If the module is not a typescript module then you might need to install types for it.
In VS Code, hover over the import - if there are no types for the module then you might need to install them (if they exist) using for example:

```sh
$ npm i --save-dev @types/uuid
```

If there is not types for the module then you will need to create your own (outside scope of this project). But see the [Typescript documentation](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html)


# Monorepo setup

This is done using yarn and lerna - based on [this blog post](https://blog.ah.technology/a-guide-through-the-wild-wild-west-of-setting-up-a-mono-repo-with-typescript-lerna-and-yarn-ed6a1e5467a)

First install lerna and init it as a devDependencies
```sh
$ npx lerna init
```

This results in an error:
```sh
lerna ERR! Cannot initialize lerna because your package manager has not been configured to use `workspaces`, and you have not explicitly specified any packages to operate on
lerna ERR! See https://lerna.js.org/docs/getting-started#adding-lerna-to-an-existing-repo for how to resolve this
```

This is becasue we are adding lerna to an existing repo and Yarn has not been configured to use [yarn workspaces](https://yarnpkg.com/features/workspaces).

To fix this, add the following workspaces declaration to `packages.json`

```json
{
  "workspaces": [
    "packages/*"
  ]
}
  ```

now `npx lerna init` will run correctly.

