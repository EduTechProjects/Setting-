const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`${port}번 포트에서 대기중`);
});
