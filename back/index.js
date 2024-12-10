const express = require('express')
var cors = require('cors')
var fs = require('fs');

var fileupload = require("express-fileupload");

const app = express()
app.use(cors());

app.use(fileupload());

app.use(express.static('upload_images'))
app.use(express.static('no_bg_images'))

const port = 4000;

app.get('/test', (req, res) => {
  res.send('test success')
})

app.post('/upload_img', (req, res) => {

    let color= req.body.color;
  
    let file_img=req.files.file_img;

    let uniq_time = new Date();
    let file_name = uniq_time.getTime() + '_'+ file_img.name;

    let file_path = __dirname + '/upload_images/' + file_name;


    if ((file_img.mimetype == "image/png" || file_img.mimetype == "image/jpg" || file_img.mimetype== "image/jpeg") 
      && file_img.size<1000000) {


          file_img.mv(file_path , async function(err) {
            if(err){
              console.log(err);
            }else{
              const inputPath = file_path;
              const fileBlob = await fs.openAsBlob(inputPath)
              const rbgResultData = await removeBg(fileBlob, color);
              fs.writeFileSync(__dirname + '/no_bg_images/'+"no_bg_"+file_name, Buffer.from(rbgResultData));

              res.send({
                success: true,
                file_name:file_name
              })
            }
          });

    } else {
        res.send({success: false})
    }

    
})


async function removeBg(blob,color) {
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file", blob);
  formData.append("bg_color", color);


  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: { "X-Api-Key": "LajjUXV3oiHeB8CbDvttZTcv" },
    body: formData,
  });

  if (response.ok) {
    return await response.arrayBuffer();
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})