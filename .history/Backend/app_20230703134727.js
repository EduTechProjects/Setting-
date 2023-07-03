const express = require('express');
const bodyParser =require('body-parser');
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
const csurf = requrie('csurf');
const logger = require('./logger');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);


dotenv.config();
//레디스 설정
const redisClient = redis.createClient({
    url : 'redis ://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}',
    password : process.env.REDIS_PASSWORD,
})

// Router

app.use('/', indexRouter);
app.use('/speak', speakRouter);
app.use('/feedback', feedbackRouter);
app.use('/home', homeRouter);
app.use('/subject', subjectRouter);


const app = express();

//앱 서버 포트에 연결하기

app.set('port', process.env.PORT || 3000);
app.set('viw engine', 'html');



if( process.env.NODE_ENV === 'production') {
    sessionOption.proxy = true;
    app.enable('trust proxy');
    app.use(morgan('dombined'));
    app.use(helmet({contentSecurityPolicy : false}));
    app.use(hpp());
} else {
    app.use(morgan('div'));
}
app.use(session(sessionOption));

//미들웨어 설정 
app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionOption = {
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    }, 
    store : new RedisStore({client : redisClient}),
}

//body-parser 미들웨어 설정
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


//404 에러 처리 미들웨어
app.use((req,res,next) =>{
    const error = new Error('${req.method} ${req.url} 라우터가 없음🧐');
    error.status = 404;
    logger.info('왜않돼?');
    logger.error(error.message);
    next(error);

})

//500 에러 미들웨어 정의
app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error'); 
})


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'client'))
})


//포트 연결
app.listen(app.get('port' ,()=>{
     console.log('${port} 포트입니다.')
}))

//몽구스 연결
const connect =()=>{
    if (process.env.NODE_ENV !== 'production'){ //개발 모드일때는 debug모드를 사용한다.
        mongoose.set('debug', true);
    }
    mongoose.connect('mongodb://url', {
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
 module.exports = connect;
 




