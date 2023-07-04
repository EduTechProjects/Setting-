const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');
const qs = require('qs');
const mongoose = require('mongoose');
const morgan = require('morgan');
const multer = require('multer');
const dotenv = require('dotenv');
const connect = require('/schemas');
const indexRouter = require('./routes/index');
const speakRouter = require('./routes/speak');
const feedbackRouter = require('./routes/feedback');
const homeRouter = require('./routes/home');
const subjectRouter = require('./routes/subject');
const hpp = require('hpp');
const helmet = require('helmet');
const csurf = require('csurf');
const logger = require('./logger');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);

const app = express();

const cors = require('cors');
app.use(cors());

dotenv.config();

// Redis 설정
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  password: process.env.REDIS_PASSWORD,
});

// 라우터 설정
app.use('/', indexRouter);
app.use('/speak', speakRouter);
app.use('/feedback', feedbackRouter);
app.use('/home', homeRouter);
app.use('/subject', subjectRouter);

// 앱 서버 포트 설정
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');

const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  store: new RedisStore({ client: redisClient }),
};

if (process.env.NODE_ENV === 'production') {
  sessionOption.proxy = true;
  app.enable('trust proxy');
  app.use(morgan('combined'));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(hpp());
} else {
  app.use(morgan('div'));
}

app.use(session(sessionOption));

// 미들웨어 설정
app.use('/upload', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// body-parser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 404 에러 처리 미들웨어
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없음🧐`);
  error.status = 404;
  logger.info('왜않돼?');
  logger.error(error.message);
  next(error);
});

// 500 에러 처리 미들웨어
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.use(express.static(path.join(__dirname, 'public')));

// MongoDB 연결
connect();

// 앱 서버 시작
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});


app.use(express.static(path.join(__dirname, 'FrontEnd/build')));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'FrontEnd/build/index.html'));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'FrontEnd/build/index.html'));
})

app.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
  });

//포트 연결
// app.listen(app.get('port'), () => {
//     console.log(`${app.get('port')} 포트입니다.`);
// });


//몽구스 연결
  const dbconnect = () =>{
    if (process.env.NODE_ENV !== 'production'){ //개발 모드일때는 debug모드를 사용한다.
        mongoose.set('debug', true);
    }
    mongoose.connect('mongodb://root:nodejs@localhost:27017/?authMechanism=DEFAULT', {
       dbName : 'nodejs',
       useNewUrlParser : true,
       useCreateIndex : true,
    } , (error) =>{
       if (error) {
          console.log('몽고디비 연결 에러', error);
       } else {
          console.log('몽고디비 연결 성공');
       }
    });
 };
 

 mongoose.connection.on('error' ,(error)=>{
    console.error('몽고디비 연결 에러', error);
 })
 mongoose.connection.on('disconnected' ,()=>{
    conosle.error('몽고디비 연결이 끊겼슘니당. 연결 재시도 하겠습니다.');
    connect();
 })
 module.exports = dbconnect;
 




