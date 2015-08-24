FROM mwallasch/docker-ruby-node:latest

RUN apt-get update
RUN apt-get install -y openjdk-7-jre-headless
RUN apt-get -y install fontforge
RUN apt-get install unzip
RUN wget http://people.mozilla.com/~jkew/woff/woff-code-latest.zip
RUN unzip woff-code-latest.zip -d sfnt2woff && cd sfnt2woff && make && mv sfnt2woff /usr/local/bin/
RUN gem install fontcustom
RUN gem install s3_website

RUN npm install gulp -g

RUN mkdir /style-guide

WORKDIR /style-guide
ADD package.json package.json
RUN npm install

ADD s3_website.yml s3_website.yml

# simulating deployment to install all jars
# RUN s3_website push --dry-run


COPY . .
