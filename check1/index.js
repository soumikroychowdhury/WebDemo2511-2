const express = require('express')
const app = express()
const port = 3000

app.get('/check', (req, res) => {
  const val=req.query.val;
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})