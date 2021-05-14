FROM node:14-alpine AS builder
ENV NODE_ENV=development
WORKDIR /build
COPY . .
RUN npm install && \
    npm run build

FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY --from=builder /build/dist .
EXPOSE 3000
CMD ["node", "app.js"]
