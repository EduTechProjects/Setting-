FROM node:20.3-alpine3.17

#명령 실행을 위한 디렉토리 설정 
WORKDIR /the/workdir/path

#root 폴더에 있는 package-lock.json 을 /the/workdir/path에 복제하기 
COPY package-lock.json /the/workdir/path/

#roote폴더에 있는 package.json을 /the/workdir/path에 복제하기
COPY package.json /the/workdir/path/

COPY . /the/workdir/path/
# #app 폴더 만들기 - NODE>JS 어플리케이션 폴더
# RUN mkdir -p /app
# RUN mkdir -p /log

# #어플리케이션 폴더를 Workdir로 지정해주기 : 서버가 동용함
# WORKDIR /app

# #서버 파일 복사 ADD
# ADD ./ /app

# #패키지 파일들 받기
# RUN npm install

# #배포 버전으로 설정해주기
# ENV NODE_ENV = production 

# #서버 실행 
# CMD node server.js
CMD ["npm", "run", "start"]
