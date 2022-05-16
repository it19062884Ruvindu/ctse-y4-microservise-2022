const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello SLIIT , kubernet working R.K!')
})
app.get('/temp', (req, res) => {
  res.send('Welcome to sliit')
})

app.get('/ruvindu', (req, res) => {
  res.send('sri lanka !')
})

app.get('/kaushalya', (req, res) => {
  res.send('India 123')
})

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})