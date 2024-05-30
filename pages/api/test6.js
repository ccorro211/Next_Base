import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function test6(req, res){
    console.log(req.query)
    let session= await getServerSession(req,res,authOptions)
    console.log(session)
    const client = await connectDB;
    const db = client.db('forum')
    
    if(session.user.email == req.query.author){
        await db.collection('post').deleteOne({_id:new ObjectId(req.query._id)})
        res.status(200).json('정상권한삭제')
    }else{
        res.status(500).json('권한없어요')
    }
}