const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const path = require('path');
const userRoute = require("./routes/user");
const staticRout = require("./routes/staticRouter")
const {connect} = require('./connect')
const cookieparser = require('cookie-parser')


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended: false})) 
app.use(cookieparser()) 

app.use("/user", userRoute) 
app.use('/',staticRout) 

app.listen(PORT , ()=> console.log('server is runnig on http://localhost:3001/'))