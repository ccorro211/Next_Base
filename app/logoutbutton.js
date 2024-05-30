'use client'
import {signOut} from 'next-auth/react'
import { SessionProvider } from 'next-auth/react';

export default function Logoutbutton(){

    return(
        <>
        
            <button onClick={()=>{signOut()}}>로그아웃</button>
        
         
        </>
    )
}