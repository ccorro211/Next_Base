'use client'
import { useSession } from "next-auth/react"
import axios from "axios"
import { useState } from "react"
import { ReactDOM } from 'react-dom/client';
import Notlogin from "./NotLogin";

export default function join(){
    let session = useSession()
    console.log(session.data)
    if(session.data){console.log(session.data.user.email)}

    let [데이터,데이터변경] = useState([])
   
    
    return(
        
        <>
            {(session.data) ? <div>로그인되어서회원가입필요없더</div> : <Notlogin></Notlogin> }
        </>
    )
}