import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

import bcrypt from 'bcrypt'



export default async function signup(req,res){
    
    const client = await connectDB;
    const db = client.db('forum')
    console.log(req.body)
    if(req.body.name==''){
        res.status(400).json('이름기재거절')
    }
    let result = await db.collection('user_cred').findOne({email: req.body.email})
    console.log(result)
    if(result==null){
        const hash = await bcrypt.hash(req.body.password, 10)
        req.body.password = hash;
        await db.collection('user_cred').insertOne(req.body)
        res.status(200).json("가입성공")
    }else{
        res.status(500).json('이메일중복')
    }
    
}