FROM node
LABEL name="test-vue-back-cicd"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3100
CMD npm start