'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"


export default function DeleteLink({props}){

    let router = useRouter()
    return (
        <button onClick={(e)=>{
            // router.push('/list/modify')
            // fetch('/api/test5', {
            //     method: "POST",
            //     body: JSON.stringify(props),
            // }).then((r)=>{
            //     return r.json()
            // }).then((r)=>{
            //     console.log(e.target.parentElement)
            //     e.target.parentElement.style.opacity = 0
            //     setTimeout(()=>{
            //         e.target.parentElement.style.display = "none"
            //     },2000)
            // })
            fetch(`/api/test6?_id=${props._id}&title=${props.title}&author=${props.author}`).then(
                (r)=>{return r.json()}
            ).then((r)=>{
                 console.log(r)
                 if(r=='정상권한삭제'){
                    console.log(e.target.parentElement)
                    e.target.parentElement.style.opacity = 0
                    setTimeout(()=>{
                        e.target.parentElement.style.display = "none"
                    },2000)
                 }
                 
            })
        }}>삭제</button>
    )

}