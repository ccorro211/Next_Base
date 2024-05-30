
import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";
import Comment from "./Comment";


export default async function Detail(props) {
    
    const client = await connectDB;
    const db = client.db('forum')
    let result = await db.collection('post').findOne({
        _id : new ObjectId(props.params.id)    
    })
    
    
    return (
        
      <div>
        <h4>상세페이지임</h4>
        <h4>{result.title}</h4>
        <p>글내용</p>
        <Comment props={result._id.toString()}/>
      </div>
    )
  }