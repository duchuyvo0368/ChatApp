FROM node:17
# Sử dụng node image làm base image

# Tạo thư mục làm việc trong container
WORKDIR /backend


COPY package.json* ./

RUN npm install -g nodemon && npm install


COPY . .

EXPOSE 5000

CMD ["npm", "start"]