const express = require('express');
const route = express.Router();
const http = require('http');

  //render home page
route.get('/',(req,res)=>{
    res.render('index');
});

  //render receipe page
  route.get('/receipe',(req,res)=>{
    res.render('receipes');
  });

  //render contact page
  route.get('/contact',(req,res)=>{
    res.render('contact');
  });
  route.post('/recipe',(req,res)=>{
    
    cook = req.body;
    var id = '5012aa7f';
    var app_key = '55d4e3a4a5a303622ca981233920357d';
    var options = {
      "method": "GET",
      "hostname": `api.edamam.com/search?q=chichen`,
      "port": null,
      "headers":{
        "app_id":id,
        "app_key":app_key,
        "useQueryString": true
      }
    };

      //make request
      var req = http.request(options,function(res){
        var chunks = [];
        res.on('data',function(chunk){
          chunks.push(chunk);
        });
        res.on('end',function(){
          var body = Buffer.concat(chunks);
          console.log(body.toJSON());
        });
      });
      
      req.end();
    
    
  });
  
module.exports = route;