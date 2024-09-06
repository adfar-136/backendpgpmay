import React,{useState} from 'react'

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    async function handleSubmit(e){
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        })
        const data = await response.json()
        console.log(data)
        setEmail("");
        setPassword("");
    }
  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            
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
            <button>Login</button>
        </form>
    </div>
  )
}
