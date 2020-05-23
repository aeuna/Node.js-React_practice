const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000
const { User } = require("./models/Users")
const { auth } = require("./middleware/auth")
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true , useCreateIndex :true, useFindAndModify: false
}).then(() => console.log('MongoDB connect.....'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('반갑다'))

app.post('/api/users/register',(req,res)=>{ //아이디 비번을 데베에 넣는 작업
    const user = new User(req.body) // body-parser 를 통해 client 가 보내는 정보를 받을 수 있다. 
    user.save((err,userInfo) =>{
        if (err) return res.json({success : false, err })
        return res.status(200).json({success : true})
    })   
})

app.post('/api/users/login',(req,res) =>{
    //요청된 이메일이 데이터 베이스에 있는지 찾는다.
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
                res.cookie("x_auth", user.token) //x_auth라는 이름으로 쿠키에다가 집어 넣음
                .status(200)
                .json({ loginsuccess : true, userId : user._id})
    
            })
        }) 
    })   
})

app.get('/api/users/auth', auth, (req, res) => {
    //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
    res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role === 0 ? false : true, //롤이 0이면 일반유저이고 아니면 어드민 유저이다.
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      image: req.user.image
    })
  })
  
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, //미들웨어를 통해 가져올수 있음
      { token: "" }
      , (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
          success: true
        })
      })
  })



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))