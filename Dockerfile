# BUILDING
FROM hub.iot.chinamobile.com/szhcpb/node:14.5.0-alpine AS builder

WORKDIR /web

COPY . ./

# 在国内打开下面一行加速
RUN npm config set registry https://registry.npm.taobao.org/ && npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass

RUN npm install && \
  npm run build-dist

# nginx
FROM hub.iot.chinamobile.com/szhcpb/nginx:stable-alpine

COPY --from=builder web/dist /web
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/default.conf /etc/nginx/conf.d/
