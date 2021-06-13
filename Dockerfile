FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN yarn

EXPOSE 3200

ENV HOST=0.0.0.0
ENV PORT=3200

RUN yarn build

CMD [ "yarn", "start" ]