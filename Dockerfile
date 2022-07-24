FROM node:16-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

VOLUME ["/src/data", "/src/static"]

ENV PORT=3000

EXPOSE 3000

CMD ["node", "server.js"]
