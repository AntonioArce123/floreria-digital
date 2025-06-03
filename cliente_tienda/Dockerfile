FROM node:18

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules package-lock.json && npm cache clean --force && npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]
