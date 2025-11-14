const mongoose = require("mongoose");

const Noteschema = new mongoose.Schema({
  user:{type:mongoose.Schema.Types.ObjectId,ref:"User", required:true},
  title: { type: String, required: true },
  content: { type: String, required: true },
});


module.exports = mongoose.model("Note",Noteschema)