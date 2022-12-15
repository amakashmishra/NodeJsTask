const mongoose = require("mongoose");


mongoose.set('strictQuery', true);
const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true}).then((data) => {
        console.log(`MongoDB server is connected with ${data.connection.host}`);
    })
}

module.exports = connectDB;