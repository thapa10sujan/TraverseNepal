const express = require('express')
require('dotenv').config()
const connection = require('./db/connection')
const Users = require('./models/users')
connection()
const app = express()
const port = process.env.port
app.use(express.json())


app.post('/register', (req, res) => {
 Users.create(req.body)
 res.json({
 msg: "registered successfully"
 })
})
 
app.get('/products', async(req, res) => {
 const data = await Products.find()
})
 
app.put('/products/:id', async(req, res) => {
 await Products.findByIdAndUpdate(req.params.id, req.body)
 })
 
 app.delete('/products/:id', async(req, res) => {
 await Products.findByIdAndDelete(req.params.id)
 })
 
 app.get('/products', async(req, res) => {
 const data = await Products.find()
 })


 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })