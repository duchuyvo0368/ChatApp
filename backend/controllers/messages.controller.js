
import Messages from '../models/message.model.js';




export  async function getMessage (req, res, next) {
    try{
        const {from,to}=req.body;
        const messages=await Messages.find({user:{
            $all:[from, to]
        },
    }).sort({updateAt:1})

    const projectMessage=messages.map((msg) =>{
        return{
            fromSelf:msg.sender.toString()===from,
            messages:msg.message.text
        }
    });
    res.json(projectMessage);
    }catch(e){
        next(e);
    }
}
export  async function addMessage(req,res,next){
    try{
        const {from,to,message}=req.body;
        const data=await Messages.create({
            message:{text: message.text},
            user:[from,to],
            sender:from
        })
        if(data){
            res.json({msg:"Message added successfully."})
        }else{
            res.json({msg:"Failed to add message."})
        }
    }catch(e){
        next(e);
    }

}