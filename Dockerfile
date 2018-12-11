FROM node:10-alpine

WORKDIR /home/app

RUN apk update
RUN apk add util-linux
