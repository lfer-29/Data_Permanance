const express = require('express');
const nedb = require("nedb-promises");

const app = express();
const db = nedb.create('db.jsonl');

app.use(express .static('public'));
const hits = {
    home: 0,
    page1: 0,
    page2: 0
};  
app.use(express.static('public'));
app.get('/hits/:page', (req,res)=>{
  const page = req.params.page;
  hits[page]++;
  res.json({count: hits[page]});
});
app.listen(3000, ()=>console.log('server started...'));