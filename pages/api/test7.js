import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import async from '../../app/detail/[id]/page';
import Comment from '../../app/detail/[id]/Comment';


export default async function test7(req,res){
    console.log(req.body)
    const client = await connectDB;
    const db = client.db('forum')
    await db.collection('comment_collection').insertOne({content : req.body.comment , ObjId : new ObjectId(req.body.ObjId)})
    console.log(req.body._id)
    res.status(200).json('성공')
}