import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req,res){

    console.log(req.body)
    const client = await connectDB;
    const db = client.db('forum')
    let result = await db.collection('post').findOne({
        _id : new ObjectId(req.body.id)    
    })
    console.log(result)
    await db.collection("post").updateOne({_id:new ObjectId(req.body.id)},{$set:{title:req.body.title,content:req.body.content}})
    
    res.status(200).redirect('/list')
}
