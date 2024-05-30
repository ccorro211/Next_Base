import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req,res){
    
    const client = await connectDB;
    const db = client.db('forum')
    let result = await db.collection('post').find().toArray()
    let session = await getServerSession(req,res,authOptions)
    console.log(session)
    if(session){req.body.author = session.user.email}

    if(req.method=='POST'){
        try{
            const client = await connectDB;
            const db = client.db('forum')
        }catch(error){console.log('db에러')}

        
        db.collection("post").insertOne(req.body)
        return res.status(200).redirect('/list')
    }

    res.json(result)
}