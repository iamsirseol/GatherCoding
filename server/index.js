// require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const express = require('express')
const app = express()
const port = process.env.HTTP_PORT || 3000;

const indexRouter = require('./routes/index');
// const linksRouter = require('./routes/links');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "DELETE"],
  })
);
app.use(cookieParser());

app.use('/', indexRouter);
// app.use('/links', linksRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
