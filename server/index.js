const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index');
const linksRouter = require('./routes/links');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/', indexRouter);
app.use('/links', linksRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
