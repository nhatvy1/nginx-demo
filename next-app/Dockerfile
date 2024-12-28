# Base on official Node.js Alpine
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install PM2 globally
# RUN npm install --global pm2

# Copy package.jon and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies of unchanged
COPY package.json .


# Copy all files
COPY . .

# Install dependencies
RUN npm install

# Build app
RUN npm run build

# Production stage
FROM build AS production

COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/public ./public

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script when container starts
CMD [ "npm", "run", "start" ]
