FROM node:20

WORKDIR /app

COPY package.json package-lock.json tsconfig.json vite.config.ts ./
RUN npm install

COPY src ./src
COPY index.html ./

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]