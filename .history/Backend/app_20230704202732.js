

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
const connect =()=>{
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
 module.exports = connect;
 




