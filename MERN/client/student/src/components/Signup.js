import React, { useState } from 'react'

export default function Signup() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    async function handleSubmit(e){
        e.preventDefault();
        const response = await fetch("http://localhost:5000/register",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username,email,password})
        })
        const data = await response.json()
        console.log(data)
        setEmail("");
        setUsername("")
        setPassword("");
    }
  return (
    <div>
        <h1>SignUp Page</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>UserName: </label>
                <input type="text" placeholder='Enter UserName' value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" placeholder='Enter Email' value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" placeholder='Enter Password' value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button>SignUp</button>
        </form>
    </div>
  )
}


//hgfygfyf54556adf3dsedfdtdt65