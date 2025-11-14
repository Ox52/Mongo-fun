const dotenv = require("dotenv");
const connectDb = require("./config/db")

const app = require("./src/app");


dotenv.config();

connectDb();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{

    console.log(`🚀 Server running on port ${PORT}`);
})