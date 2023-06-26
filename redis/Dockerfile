#Redis Base Image
FROM redis:latest

#Set the working directory in the container
WORKDIR /usr/src/app

#redis.conf 파일을 컨테이너에 복사하기
COPY redis.conf /usr/local/etc/redis/redis.conf

#Redis port 
EXPOSE 6379

#Redis 서버 구동
CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]