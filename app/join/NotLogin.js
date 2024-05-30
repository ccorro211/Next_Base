import { useState } from "react"
export default function Notlogin(){
    let [데이터,데이터변경] = useState([])
    return (
        <>
            <div>
                <h1>회원가입</h1>
                <form action='/api/test3' method="POST">
                <span>아이디<input name='id' type="text"></input></span>
                <span>비번<input name='password' type='text'></input></span>
                <button type="submit">가입</button>
                
                </form>
                <h5></h5>
            </div>
            <div>
                <button onClick={()=>{
                     axios.get('https://api.thecatapi.com/v1/images/search?limit=10').then(res => {
                        console.log(res.data)
                        let copy = [...res.data]
                        데이터변경(copy)
                        console.log(데이터)
                        
                    })
                }}>버튼</button>
                {(데이터.length >= 1) ? <h1>{데이터[1].id}</h1>:null}
            </div>
        </>
    )
}