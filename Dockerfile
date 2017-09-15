FROM mhart/alpine-node:8.1

ENV AWS_ACCESS_KEY ${AWS_ACCESS_KEY}
ENV AWS_SECRET_ACCESS_KEY ${AWS_SECRET_ACCESS_KEY}

WORKDIR /style-guide

RUN apk add --no-cache git ruby python ruby-bundler build-base ruby-dev libffi-dev && \
    gem install scss_lint jekyll json --no-rdoc --no-ri && \ 
    npm install gulp http-server -g

ADD package.json package.json
ADD yarn.lock yarn.lock
RUN yarn

ADD . /style-guide
