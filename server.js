const express = require('express');
const app = express();
const userRouter = require('./routes/user');

const PORT = 3000;

app.use(mylogger);

//app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index', {text: "NodeJS"});
});

//ルーティング設定
app.use('/user', userRouter);

//ミドルウェア
function mylogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(PORT, () => console.log("サーバーが起動しました"));