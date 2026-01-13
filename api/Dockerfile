FROM ruby:3.4.7

ENV LANG=C.UTF-8 \
  TZ=Asia/Tokyo

WORKDIR /app

RUN apt-get update -qq && \
  apt-get install -y --no-install-recommends \
    nodejs \
    default-mysql-client \
    default-libmysqlclient-dev \
    build-essential \
    pkg-config \
  && rm -rf /var/lib/apt/lists/*


COPY . /app
RUN bundle install

EXPOSE 3000
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
