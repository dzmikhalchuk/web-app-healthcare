FROM node:20

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./
RUN npm install

COPY src ./src

EXPOSE 5000

CMD ["npm", "run", "dev"]