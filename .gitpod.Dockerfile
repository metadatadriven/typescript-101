# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-full/tags
FROM gitpod/workspace-full:2023-11-19-19-13-44

RUN sudo install-packages -y build-essential
RUN sudo install-packages -y libx11-dev libxkbfile-dev
RUN sudo install-packages -y libsecret-1-dev

# install version 4 of Yeoman - currently an issue with using Yeoman v5
# https://github.com/eclipse-theia/generator-theia-extension/issues/182
RUN sudo npm install yo@4.1.0 -g

