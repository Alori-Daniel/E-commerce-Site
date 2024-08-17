import React from 'react'
import './Css/loginsignup.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" placeholder='Your Name' />
          <input type="email" name="" placeholder='Email Address' />
          <input type="password" name="" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
