const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000
const { User } = require("./models/Users")
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
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

app.post('/login',(req,res) =>{
    //요청된 이메일이 데이터 베이스에 있는지 찾는다
    User.findOne({email : req.body.email },(err,user)=>{
        if(!user){
            return req.json({loginsuccess : false, msg : "제공된 이메일에 해당되는 유저가 없습니다."})
        }
        //요청된 이메일이 데이터 베이스에 있을시, 요청된 비밀번호가 맞는지 확인한다
        user.comparePassword(req.body.password , (err,isMatch) => { //메소드를 유저 모델에서 만들면 된다
            if(!isMatch)
                return req.json({loginsuccess: false, msg: "비밀번호가 틀렸습니다."})
            //비밀번호까지 맞다면 token을 생성
            user.generateToken((err,user) => {
                if(err) return res.status(400).send(err)
                //토큰을 저장한다.
                res.cookie("x_auth", user.token)
                .status(200)
                .json({ loginsuccess : true, userId : user._id})
    
            })
        }) 
    })   
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))