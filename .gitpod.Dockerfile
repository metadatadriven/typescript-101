# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-full/tags
FROM gitpod/workspace-full:2023-11-19-19-13-44

RUN sudo install-packages -y build-essential
RUN sudo install-packages -y libx11-dev libxkbfile-dev
RUN sudo install-packages -y libsecret-1-dev


