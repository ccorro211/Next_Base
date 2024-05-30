import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function(props){
    const client = await connectDB;
    const db = client.db('forum')
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})
    return(
        <>
            <div>
                <h1>수정페이지</h1>
                <p>기존 글제목 : {result.title}</p>
                <p>기존 글내용 : {result.content}</p>
                <form action="/api/test4" method="POST">
                    <span>글제목<input name="title" type='text' ></input></span>
                    <span>글내용<input name='content' type='text'></input></span>
                    <input name='id' value={props.params.id} style={{display:'none'}}></input>
                    <button type="submit">발행</button>
                </form>
            </div>
        </>
    )
}
