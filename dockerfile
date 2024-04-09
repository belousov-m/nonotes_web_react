FROM node:21-alpine
WORKDIR /nonotes_front_r
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD ["npm", "start"]