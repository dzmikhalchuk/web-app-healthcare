# web-app-healthcare

mern webapp

Frontend → http://localhost:3000

Backend → http://localhost:5000/api/hello

MongoDB → port 27017

npm install --save-dev @types/express

# 1. Build images (only first time or when Dockerfile changes)

docker compose build

# 2. Install node_modules inside backend container

docker compose run backend npm install

# 3. Install node_modules inside frontend container

docker compose run frontend npm install

# 4. Start everything

docker compose up
