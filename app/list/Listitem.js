'use client'
import Link from "next/link"
import DeleteLink from "./DeleteLink"
import DetailLink from "./DetailLInk"
export default function Listitem({result}){

    return(
        <div>
        {result.map((e,i)=>{
            return(
                
                <div className="list-item">
                    <Link href={'/detail/'+e._id} ><p>{e.content}</p></Link>
                    
                    <DetailLink></DetailLink>
                    <DeleteLink props={e}></DeleteLink>
                    <Link href={"/list/modify/"+e._id}>수정버튼</Link>
                </div>
                
                
            )
        })}
        </div>
    )
}