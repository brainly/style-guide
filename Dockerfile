FROM mwallasch/docker-ruby-node:latest

RUN apt-get update
RUN apt-get -y install fontforge
RUN apt-get install unzip
RUN wget http://people.mozilla.com/~jkew/woff/woff-code-latest.zip
RUN unzip woff-code-latest.zip -d sfnt2woff && cd sfnt2woff && make && mv sfnt2woff /usr/local/bin/
RUN gem install fontcustom

RUN npm install gulp -g

RUN mkdir /style-guide

WORKDIR /style-guide
ADD package.json package.json
RUN npm install --production

COPY . .
