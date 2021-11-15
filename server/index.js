//------------------------------------------------
// express, 네트워크, 라우터 관련 변수 선언
//-----------------------------------------------

// require("dotenv").config();
const multer = require('multer'); // 서버에 폼 데이터 형식을 업로드하려고 다운받으겁니다.
const form_data = multer();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const express = require('express')
const app = express()
const port = process.env.HTTP_PORT || 4000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const roomsRouter = require('./routes/rooms');

//------------------------------------------------------
// 데이터베이스(시퀄라이즈) 관련 변수 선언
//-------------------------------------------------------

const { sequelize } = require('./models');

//-----------------------------------------------------
// 앱 시작
//------------------------------------------------------

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(form_data.array());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
  })
);
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rooms', roomsRouter);

sequelize.sync({ force: false })
.then(() => {
  console.log('데이터베이스 연결 성공');
})
.catch((err) => {
  console.log(err);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
