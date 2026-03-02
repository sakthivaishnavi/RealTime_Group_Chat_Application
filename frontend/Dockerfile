FROM node:24.13.0-alphine
WORKDIR /src
COPY package.json ./
RUN npm install
COPY .
EXPOSE 5001
CMD ["npm","run","dev"]
