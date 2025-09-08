FROM node:22-alpine 

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Cloud Run expects 8080
EXPOSE 8080

# Run vite preview on port 8080
CMD ["npm", "run", "preview", "--", "--port", "8080", "--host"]




# # ---- Build stage ----
# FROM node:22-alpine AS builder

# WORKDIR /app

# # Copy package files and install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy source code and build the Vite app
# COPY . .
# RUN npm run build

# # ---- Production stage ----
# FROM nginx:alpine

# # Copy build output to nginx’s default html folder
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Expose Cloud Run port
# EXPOSE 3000

# # Start nginx in foreground (Cloud Run needs foreground process)
# CMD ["nginx", "-g", "daemon off;"]
