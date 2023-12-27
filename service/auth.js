const sessionIdToUserMap = new Map();
const jwt = require('jsonwebtoken')

const doteenv = require('dotenv')

require('dotenv').config()
const { secretkey } = process.env;
const secret =  secretkey;

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
