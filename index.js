const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const { User } = require("./models/Users")
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true , useCreateIndex :true, useFindAndModify: false
}).then(() => console.log('MongoDB connect.....'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('반갑다'))

app.post('/register',(req,res)=>{ //아이디 비번을 데베에 넣는 작업
    const user = new User(req.body) // body-parser 를 통해 client 가 보내는 정보를 받을 수 있다. 
    user.save((err,userInfo) =>{
        if (err) return res.json({success : false, err })
        return res.status(200).json({success : true})
    })   
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))