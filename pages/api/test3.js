import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
export default async function handler(req,res){

    
    // if(session){req.body.author=session.user.email}
    const client = await connectDB;
    const db = client.db('forum')
    let result = await db.collection('user').find().toArray()
    if(result.find((e)=>{return e.id == req.body.id })){
        console.log('가입불가')
        return res.status(400).json('아이디겹침').redirect('/join')
    }
    db.collection('user').insertOne(req.body)
    return res.status(200).json('가입성공')
    

   
    
    // if(req.method=='POST'){
    //     try{
    //         const client = await connectDB;
    //         const db = client.db('forum')
    //     }catch(error){console.log('db에러')}

        
    //     db.collection("post").insertOne(req.body)
    //     return res.status(200).redirect('/list')
    // }

    // res.json(result)
}