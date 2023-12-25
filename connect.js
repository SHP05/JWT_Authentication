const mongoose = require('mongoose')

const connectDB = mongoose.connect('mongodb+srv://shyamjpankhaniya05:0zliiVzCoFf0JErc@user.w3e1oqm.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('DB conected..'))
.catch(err => console.log(err))

module.exports = {connectDB}


