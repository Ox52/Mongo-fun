const User = require("../models/User");
const generateToken = require("../utils/generateToken")

// regester to new user 


exports.registerUser = async (req,res,next) =>{

    try{
        const {name,email,password} = req.body;

        const UserExits = await User.findOne({email});
        if(UserExits)return res.status(400).json("User  already exits ") 

            const user = await User.create({name,email,password}); 

            res.status(201).json({

                _id: user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id)
            });

    }
    catch(error){

        next(error)

    }
}

//login user

exports.authUser = async (req, res ,next)=>{

    try{

        const {email,password} = req.body;
        const user  = User.findOne({email});

        if(user && (await user.matchPassowrd(password))){

            res.json({
                  _id: user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id)


            });

           
        }
         else{
                res.status(400).json({message:"invalid creds"})
            }
    


    } catch(error){
        next(error)
    }
}