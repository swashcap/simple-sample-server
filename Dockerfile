# https://nodejs.org/de/docs/guides/nodejs-docker-webapp/
FROM node:11.13
WORKDIR /usr/src/app
COPY package.json yarn.lock .
RUN yarn
COPY . .
RUN yarn build
ENV NODE_ENV production
CMD ["yarn", "start"]
