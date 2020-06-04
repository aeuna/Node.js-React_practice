const { User } = require("../models/Users")

let auth = (req,res,next) => {
    //인증처리를 하는곳

    //클라이언트 쿠키에서 토큰을 가져온다
    let token = req.cookies.x_auth;
    //토큰을 복호화 한후 유저를 찾는다
    User.findByToken(token, (err,user) =>{
        if(err) throw err;
        if(!user) return res.json({isAuth : false, err : true})
        req.token = token //request 정보로 token 과 user를 넣어준 이유는 index.js에서도 쓸수 있기 때문(req.token, req.user를 사용해서)
        req.user = user
        next() //안쓰면 미들웨어에서 갖혀버림 써줘야 다음으로 넘어감
    })


}
module.exports =  { auth };