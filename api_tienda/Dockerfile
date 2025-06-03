FROM node:18-alpine3.19

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "src/app.ts"]
