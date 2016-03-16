FROM mhart/alpine-node:5.8

ENV AWS_ACCESS_KEY ${AWS_ACCESS_KEY}
ENV AWS_SECRET_ACCESS_KEY ${AWS_SECRET_ACCESS_KEY}

WORKDIR /style-guide
ADD package.json package.json

RUN apk add --no-cache git ruby python ruby-bundler build-base ruby-dev libffi-dev && \
    gem install scss_lint jekyll --no-rdoc --no-ri && \ 
    npm install gulp http-server -g && \
    npm install && \
    apk del ruby-dev libffi-dev python build-base

ADD . /style-guide
