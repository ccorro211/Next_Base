'use client'
import {signIn} from 'next-auth/react'
import { SessionProvider } from 'next-auth/react';

export default function Loginbutton(){

    return(
        <>
        
            <button onClick={()=>{signIn()}}>로그인</button>
        
         
        </>
    )
}