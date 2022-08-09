const express = require('express');
const app = express()

const server = app.listen(3000,()=>{
   console.log('Start Server : localhost:3000')
});

app.set('pages',__dirname+'/views')
app.set('view engine','ejs');
app.engine('js',require('ejs').renderFile);

app.get('/', function(req, res) {
    res.render('homePage.js')
  })

app.get('/about', function(req, res){
res.send('about page')
})