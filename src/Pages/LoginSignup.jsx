import React, { useState } from 'react'
import loginSignup from './CSS/loginSignup.css'

const LoginSignup = () => {

  const [page,setPage] = useState('signup')

  return (
    <div className='loginsignup'>
        <div className="signup">
            <h1>Sign Up</h1>
            <form action="">
            <input type="text" placeholder='Your Name'/>
            <input type="text" placeholder='Email Address'/>
            <input type="Password" placeholder='Password'/>
            <button>Continue</button>

            </form>
            <p>Already Have an accout? <a onClick={()=>setPage("login")} style={{cursor:"pointer"}}>Login here</a></p>
        </div>
    </div>
  )
}

export default LoginSignup