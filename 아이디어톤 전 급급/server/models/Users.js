const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10; //이 솔트를 이용해서 암호화 10자리
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true, //공백을 붙여준다 43 34 이면 4334 이런 느낌
        unique : 1
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    tokenExp: {
        type : Number
    }
})
//유저정보에 저장하기 전에 무언가를 주겠다 아마 비밀번호 암호화
userSchema.pre('save',function(next){
    var user = this

    if(user.isModified('password')){  //위의 디비에서 password가 수정될때만 암호화를 해준다
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err)
    
            bcrypt.hash(user.password, salt, function(err, hash) {  //내가 순수하게 넣는 비밀번호 myPlaintextPassword -> user.password //hash(암호화된 비밀번호)
                // Store hash in your password DB.
                if(err) return next(err)
                user.password = hash
                next()
            });
        });
    }
    else{
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword,cb) {
    bcrypt.compare(plainPassword,this.password, function(err,isMatch){
        if(err) return cb(err)
        cb(null,isMatch) //error는 없고, 비밀번호는 같다.
    })
}

userSchema.methods.generateToken = function(cb){
    var user = this
    //jsonwebtoken을 이용하여 token 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken') //user._id + 'secretToken' = token -> 'secretToken'을 사용해서 use._id를 찾을 수 있음
    user.token = token
    user.save(function(err,user) {
        if(err) return cb(err)
        cb(null,user)
    })
}
userSchema.statics.findByToken = function(token,cb) {
    var user =this
    jwt.verify(token,'secretToken', function(err, decoded){  // decoded -> decoded 된 유저아이디가 나옴
        //유저 아이디를 이용해서 유저를 찾은후 
        //클라이언트에서 가져온 토큰과 DB에서 가져온 토큰이 같은지 확인
        user.findOne({"_id" : decoded , "token" : token }, function(err, user){
            if(err) return cb(err)
            cb(null, user)
        })
    } )
}

const User = mongoose.model('User',userSchema)
module.exports = { User }
