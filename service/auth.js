const sessionIdToUserMap = new Map();
const jwt = require('jsonwebtoken')
const secret =  'shyam@55@'

function setUser(user){
    // sessionIdToUserMap.set(id,user)
    return jwt.sign({
        _id: user._id,
        email: user.email,
    },secret)
}

function getUser(token){
    if(!token) return null;
    try{
        return jwt.verify(token,secret);
    }catch(err)
    {
        return null;
    }
}

module.exports = {
    setUser,
    getUser
}