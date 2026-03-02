const express = require('express');
const nedb = require("nedb-promises");

const app = express();
const db = nedb.create('db.jsonl');

app.use(express.static('public'));
app.get('/hits/:pageID', async (req,res)=>{
  const pageID = req.params.pageID;

  let page = await db.findOne({pageID});
  if (!page) {
    page = await db.insert({pageID, hits: 1});
  } else {
    await db.update(
        {pageID},
        {$set: {hits: page.hits + 1}}
    );
    page.hits += 1;
  }

  res.json({pageID, hits: page.hits});
});
app.listen(3000, ()=>console.log('server started...'));