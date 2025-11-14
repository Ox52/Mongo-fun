const express = require("express");
const authRoutes = require("../src/routes/authRoutes")
const noteRoutes = require("../src/routes/noteRoutes");
const {errorHandler} = require("./middleware/errormiddleware")

const app = express();

app.use(express.json());

app.use("/api/auth" , authRoutes);
console.log("noteRoutes:", noteRoutes);

app.use("api/auth",noteRoutes);
app.use(errorHandler);

module.exports = {app}

