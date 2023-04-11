FROM node:18-alpine as builder

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:1.22.1-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

ENTRYPOINT [ "nginx", "-g","daemon off;"]



