FROM node:8

WORKDIR /app

COPY . /app

RUN npm i

RUN npm install -g typescript
RUN npm install -g nodemon

RUN npm run build

EXPOSE 3002

CMD ["npm", "run", "server"]
