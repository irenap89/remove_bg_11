const express = require('express')
var cors = require('cors')
var fileupload = require("express-fileupload");

const app = express()
app.use(cors());

app.use(fileupload());

const port = 4000;

app.get('/test', (req, res) => {
  res.send('test success')
})


app.post('/upload_img', (req, res) => {

    // console.log('BODY');
    // console.log(req.body);

    // console.log('FILES');
    console.log(req.files);

    res.send('upload img success')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})