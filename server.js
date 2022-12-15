const app = require("./app.js");
const connectDB = require("./config/database.js");

// connecting DataBase 
connectDB();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`);
})

