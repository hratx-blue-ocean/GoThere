FROM node:12.4.0
EXPOSE 3000

WORKDIR /app

COPY package*.json /app

RUN npm ci

COPY . /app

RUN npm install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application
CMD /wait && npm install && npm run start