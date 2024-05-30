import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { Joan } from "next/font/google";

export default async function test5(req,res){
    
    let a= JSON.parse(req.body)
    const client = await connectDB;
    const db = client.db('forum')
    await db.collection('post').deleteOne({_id:new ObjectId(a._id)})

    res.status(200).json('dd?')
}