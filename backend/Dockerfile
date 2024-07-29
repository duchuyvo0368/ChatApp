FROM node:20.14.0 
# Sử dụng node image làm base image

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và yarn.lock vào thư mục làm việc
COPY package.json yarn.lock ./

# Cài đặt các dependencies
RUN yarn install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Mở cổng 5000
EXPOSE 5000

# Khởi chạy ứng dụng
CMD ["yarn", "start"]