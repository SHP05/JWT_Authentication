//here we check if user id is present in cookies then direct redirect to home page otherwise logged in
const { getUser } = require("../service/auth")

async function restrictToLoggedinUserOnly(req,res,next){
    const userUid = req.cookies?.uid;

    if(!userUid){
        return res.redirect("/login")
    }
    const user  = getUser(userUid)
    if(!user) return res.redirect('login')

    req.user = user;
    next();
}

module.exports = { restrictToLoggedinUserOnly };