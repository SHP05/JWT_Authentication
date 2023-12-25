const User = require('../model/user');
// const { use } = require('../routes/user');
const { v4:uuidv4 } = require('uuid')
const { setUser, getUser } = require('../service/auth')
//Note uuid is provides user id when we generate session id 

async function handleUserSignup(req,res){
    const {name , email , password} = req.body;
    await User.create({
        name,
        email,
        password
    });
    return res.redirect("/");  // after login it render home handelbar
}

async function handleUserLogin(req,res){
    const { email , password } = req.body;
    const user = await User.findOne({email,password})
    console.log("User",user)
    if(!user){
        return res.render('login',{err:"Invalid usernaem and password"});
    }

    //for session 
    // const sessionId = uuidv4();
    // setUser(sessionId, user);
    // res.cookie("uid",sessionId);
    
    //for jwt token
    const token = setUser(user)
    res.cookie("uid",token)

    return res.redirect('/')
}
module.exports = { handleUserSignup , handleUserLogin };