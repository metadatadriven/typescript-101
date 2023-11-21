# typescript-101 - experimanet/smalcolm/theia-blueprint

Experiment at creating a [theia blueprint](https://theia-ide.org/docs/blueprint_download) project that runs in [gitpod](https://www.gitpod.io/).

## First off, create a Gitpod Dockerfile

We need this with all the [Thiea prerequisites](https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md#prerequisites) installed.

For this we are going to create a [custom workspace image](https://www.gitpod.io/docs/configure/workspaces/workspace-image#using-a-custom-dockerfile)

1. create `.gitpod.yml` file as per documentation
2. create the `.gitpod.Dockerfile` and add prerequisites:

```
# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-full/tags
FROM gitpod/workspace-full:2023-11-19-19-13-44

RUN sudo install-packages -y build-essential
RUN sudo install-packages -y libx11-dev libxkbfile-dev
RUN sudo install-packages -y libsecret-1-dev
```

## Yeoman Generator

The Theia Yeoman generator h[as a bug when running Yeoman 5+](https://github.com/eclipse-theia/generator-theia-extension/issues/182) so to workaround install Yeoman 4.0:

```sh
$ npm install yo@4.0.0 -g
```

Install it with
```sh
$ npm install -g yo generator-theia-extension
```

NOTE the generator has a `--standalone` option that doesn not create the project root

First off, lets generate a hello-world project

```sh
yo theia-extension
```

### Running in the browser

```sh
yarn build:browser
yarn start:browser
```

### Install an additional component using Yeoman generator

The trick here is to use the `--standalone` option, e.g.

```sh
$ yo theia-extension --standalone
```

Then you need to add the module as a dependency to the `browser-app/package.json`

REMEMBER to `npm install` to force dependencies to be rebuild

