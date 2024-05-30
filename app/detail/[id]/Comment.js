'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export default function Comment({props}){
    let [코멘트,코멘트변경] = useState('')
    let [댓글목록,댓글목록변경] = useState([])
    useEffect(()=>{
        axios.post("/api/test8",{ _id : props}).then(res=>{
            console.log(res.data)
            let copy = [...res.data]
            댓글목록변경(copy)
        })
        
    },[])
    return (
        <div>
            
            <input onChange={(e)=>{
                console.log(e.target.value)
                코멘트변경(e.target.value)
            }} />
            <button onClick={()=>{
                axios.post('/api/test7', { comment : 코멘트 , ObjId : props})
            }}>입력전송</button>
            
            {댓글목록.map(e=>{
                return(
                    <div>
                        {e.content}
                    </div>
                )
            })}
            
        </div>
    )
}