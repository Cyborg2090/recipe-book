const express = require('express');
const route = express.Router();
const http = require('https');
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
  route.get('/recipe',(req,res)=>{
    
    var id = '5012aa7f';
    var app_key = '55d4e3a4a5a303622ca981233920357d';
  
    var options = {
      "method": "GET",
      "Content-Encoding": 'application/json',
      "hostname":encodedURI(`api.edamam.com/search?q= ${req.body}`),
      "port": 80,
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
          var json = JSON.stringify(body);
          console.log(json.toString(json));
          
          
         
        });
        
      });
      
      req.end();
      
      
    
  });
  
module.exports = route;
