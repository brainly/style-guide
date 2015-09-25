FROM shawnzhu/ruby-nodejs

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN apt-get update
RUN apt-get install -y openjdk-7-jre-headless
RUN gem install s3_website --no-rdoc --no-ri
RUN gem install scss_lint -v 0.41.0 --no-rdoc --no-ri
RUN gem install jekyll --no-rdoc --no-ri

RUN npm install gulp -g
RUN npm install http-server -g

RUN mkdir /style-guide

WORKDIR /style-guide
ADD package.json package.json
RUN npm install
