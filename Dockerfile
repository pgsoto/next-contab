FROM node:latest

RUN mkdir -p /srv/app/next-client

WORKDIR /srv/app/next-client

COPY package*.json /srv/app/next-client/

RUN npm install -g nodemon

RUN npm install --silent

COPY . /srv/app/next-client

CMD [ "npm", "start" ]
