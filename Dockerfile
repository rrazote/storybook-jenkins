# FROM node:16.13.1-alpine

# WORKDIR /ad-reas-web

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm build

# EXPOSE 3000

# CMD [ "npm", "start" ] 


# Multi stage

FROM node:16.13.1-alpine AS first_stage

WORKDIR /ad-reas-web

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build


# STAGE 2

FROM nginx:stable-alpine

COPY --from=first_stage /ad-reas-web/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]