'use client'


import Loginwrite from "./loginwrite"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"




function Write(){
    let session=useSession()
    let router=useRouter()
    console.log(session.data)
    return(
        <div>
            { (session.data != undefined)&&(session.data != null) ? <Loginwrite></Loginwrite> : <div>세션없을시</div>}
            
        </div>
    )
}

export default Write