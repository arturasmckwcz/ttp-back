FROM node:16

WORKDIR /usr/arturasmckwcz

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn install --pure-lockfile

COPY src ./src

EXPOSE 3000

CMD ["yarn", "start"]