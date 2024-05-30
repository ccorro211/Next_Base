
import { connectDB } from '@/util/database';
import async from '../../app/page';
import { ObjectId } from 'mongodb';

export default async function test8(req, res){
    // console.log(req.body)
    const client = await connectDB
    const db = client.db('forum')
    let dat= await db.collection('comment_collection').find({ObjId : new ObjectId(req.body._id)}).toArray()
    // console.log(dat)
    res.status(200).json(dat)
}