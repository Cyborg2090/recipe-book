const express = require('express');
const route = express.Router();
  //render home page
route.get('/',(req,res)=>{
    res.render('index');
});
module.exports = route;