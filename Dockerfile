FROM mwallasch/docker-ruby-node

ENV AWS_ACCESS_KEY ${AWS_ACCESS_KEY}
ENV AWS_SECRET_ACCESS_KEY ${AWS_SECRET_ACCESS_KEY}

RUN gem install scss_lint jekyll --no-rdoc --no-ri \
    && npm install gulp http-server -g \
    && mkdir /style-guide

WORKDIR /style-guide
ADD package.json package.json
RUN npm install
