const express = require('express')
require('dotenv').config()
const connection = require('./db/connection')
const Users = require('./models/users')
const cors = require('cors')
connection()
const app = express()
app.use(cors())
const port = process.env.PORT
app.use(express.json())

 
app.post('/register', async(req, res) => {
 await Users.create(req.body)
 res.json({
 msg: "You are successfully Registered"
 })
})

 app.get('/checkUserExists/:phoneNumber',async(req,res)=>{
   const data = await Users.findOne({phoneNumber:req.params.phoneNumber});
   if(data){
   res.json({
    msg: "Phone Number already exists"
   })
 }else[
    res.json({
        validPhoneNo: true
    })
 ]
})
 
 
// app.get('/products', async(req, res) => {
//  const data = await Products.find()
// })
 
// app.put('/products/:id', async(req, res) => {
//  await Products.findByIdAndUpdate(req.params.id, req.body)
//  })
 
//  app.delete('/products/:id', async(req, res) => {
//  await Products.findByIdAndDelete(req.params.id)
//  })
 
//  app.get('/products', async(req, res) => {
//  const data = await Products.find()
//  })


 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })