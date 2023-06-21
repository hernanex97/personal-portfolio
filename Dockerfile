FROM node:lts-alpine
WORKDIR /portfolio-app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]