const Note = require("../models/Note");


//get all notes

exports.getNotes =async(req,res, next) =>{

    try{

        const notes = Note.findOne({user:req.user._id})

        res.json(notes)
    }
catch(error){

    next(error)
}

}


//create  notes

exports.createNote = async(req,res,next)=>{

    try{

        const notes = Note.create({user:req.user._id, title , content});
         res.status(400).json(notes)

    }
    catch(error){

        next(error)
    }
}


///update notes

exports.updateNote = async(req,res, next) =>{

try{

    const notes = Note.findById(req.params.id);
    if(!notes) return res.status(400).json("note not found")

        if( notes.user.toString() !== req.user._id.toString())
             return res.status(401).json({ message: "Not authorized" });

    const update =  await Note.findByIdAndUpdate(req.params._id, title, content ,{new:true})

    res.json(update)

}

catch(error){

    next(error)

}
    
}

//delete the note 


exports.deleteNote = async(req, res,next) =>{

    try{
        const notes = Note.findById(req.params.id);
        if (!notes) return res.status(400).json("note not found");

        if (notes.user.toString() !== req.user._id.toString())
          return res.status(401).json({ message: "Not authorized" });

         await notes.deleteOne();

         res.json({message:"note deleted "})



    }
    catch(error){
        next(error)
    }
}
