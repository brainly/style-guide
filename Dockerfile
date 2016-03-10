FROM shawnzhu/ruby-nodejs

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8
ENV AWS_ACCESS_KEY ${AWS_ACCESS_KEY}
ENV AWS_SECRET_ACCESS_KEY ${AWS_SECRET_ACCESS_KEY}

RUN apt-get update
RUN gem install scss_lint jekyll --no-rdoc --no-ri
RUN npm install gulp http-server -g

RUN mkdir /style-guide

WORKDIR /style-guide
ADD package.json package.json
RUN npm install
