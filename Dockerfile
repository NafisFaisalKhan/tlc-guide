FROM node:18.20-alpine3.20 as dependencies
WORKDIR /app
COPY package.json .
RUN npm config set legacy-peer-deps true
RUN npm install
COPY . . 

# Pass environment variables
ARG NEXT_PUBLIC_SITE_URL
ARG SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV SITE_URL=$SITE_URL
ENV NODE_ENV=production

RUN echo "NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL SITE_URL=$SITE_URL"

# Build production image
RUN npm run build

# Remove folders and files not needed for prod
RUN rm -rf .npmrc .gitignore .env

# Install production packages
RUN npm install --production

FROM dependencies as builder
CMD npm run start