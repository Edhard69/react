FROM ghga/nodejs-hello-world
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "App.js"]
