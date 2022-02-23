const express = require('express')


const app = express();

app.get('/', (req, res) => {
    res.send('hello world this is local host')
  })
  
  app.listen(3000, ()=> console.log('3000'))