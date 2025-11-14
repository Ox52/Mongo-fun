const mongoose = require("mongoose");
const { schema } = require("./src/models/User");

const Schema = mongoose.Schema;

const objectId = mongoose.objectId

const User = new Schema({

    name:String,
    email:String,
    password:String
})


const Todo = new Schema({

    userId:objectId,
    title:String,
    content:String
})

const UserModel = mongoose.model("users",User)

const TodoModel = mongoose.model("todos",Todo);


module.exports={

    UserModel,
    TodoModel
}