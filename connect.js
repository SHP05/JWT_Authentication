const mongoose = require('mongoose')
const { MONGO_URL } = process.env;

const connectDB = mongoose.connect(MONGO_URL)
.then(() => console.log('DB conected..'))
.catch(err => console.log(err))

module.exports = {connectDB}


