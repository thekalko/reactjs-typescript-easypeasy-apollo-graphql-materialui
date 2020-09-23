FROM node:12.18.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN mv .env.production .env
RUN yarn install --force
RUN yarn build
CMD [ "yarn", "prod" ]
EXPOSE 3000