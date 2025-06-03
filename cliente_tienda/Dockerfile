FROM node:18-bookworm-slim

RUN apt-get update && apt-get upgrade -y && apt-get dist-upgrade -y && apt-get autoremove -y && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules package-lock.json && npm cache clean --force && npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]
