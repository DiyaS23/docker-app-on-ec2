FROM node:alpine
WORDDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMP ["npm","run","dev"]