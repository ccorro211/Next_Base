'use client'
export default function Loginwrite(){
    
    return(
        <div>
            <form action='/api/test' method="POST">
                <input name='title' type='text'></input>
                <input name='content' type='text'></input>
                <button type='submit'>btn</button>

            </form>
            <h1>작성페이지</h1>
        </div>
    )
}