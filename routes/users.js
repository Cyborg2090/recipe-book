const express = require('express');
const route = express.Router();
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
module.exports = route;