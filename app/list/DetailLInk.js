'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function DetailLink(){

    let a = usePathname()
    let b = useSearchParams()
    console.log(a)
    console.log(b)
    return (
        <button>dsf</button>
    )

}