FROM v16.15.1

RUN mkdir -p /src/app
WORKDIR /src/app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["node", "src/main.js"]