const express = require('express');
const router = express.Router()


router.get("/signup", (req,res)=>{
    return res.render("signup");
})

router.get("/login", (req,res)=>{
    return res.render("login");
})

router.get("/",(req,res)=> {
    return res.render("home")
})

module.exports = router