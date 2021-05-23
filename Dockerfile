FROM node:14-alpine AS builder
ARG ENV=development
ENV NODE_ENV=${ENV}

WORKDIR /build
COPY . .
RUN npm install && \
    npm run build

FROM node:14-alpine
ARG ENV=development
ENV NODE_ENV=${ENV}

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY --from=builder /build/dist .
COPY ./.env.${ENV} ./.env
EXPOSE 3000
CMD ["node", "app.js"]
