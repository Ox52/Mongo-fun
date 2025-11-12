const express = require("express")
const dotenv = require("dotenv");
const ConnetDb = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");

dotenv.config();

const app = express();

app.use(express.json())

//connets to db
ConnetDb();
//routes
app.use("/api/notes", noteRoutes);

//start the server 

const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{console.log(`🚀 Server running on port ${PORT}`)})


