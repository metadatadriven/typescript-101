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


