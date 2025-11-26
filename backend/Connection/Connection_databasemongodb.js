require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI; 
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() =>
        console.log('MongoDB Connected'))
    .catch(error =>
        console.log(error)
    );
module.exports = mongoose;