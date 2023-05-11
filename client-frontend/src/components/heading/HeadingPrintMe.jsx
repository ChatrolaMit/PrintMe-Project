import React, { useEffect, useState } from 'react'
import hemberger from '../../assets/hemberger.png'
// import Signin from '../signin/Signin'

import './headingPrintMe.css'
import profile_icon from '../../assets/profile_icon.png'
import Signin from '../signin/Signin'
import { useNavigate } from 'react-router-dom'


const HeadingPrintMe = () => {

  const navigate = useNavigate()
  const [auth,setAuth] = useState(localStorage.getItem('user'))
  
  useEffect(()=>{
    setAuth(localStorage.getItem('user'))
  },[auth])

  const toSignIn = () =>{
    navigate('/signin');
  }
  const toSignUp = () =>{
    navigate('/signup');
  }
  

  return (
    
        <div className='print-me-heading'>
          <div className="navContainer">

            <img className='hemberger' src={hemberger} alt="Hemberger menu" />
            <h2>Print Me</h2>
          </div>
          <div className="navSignup">
            {
              !auth?<>
              <button className="signup" onClick={toSignUp}>Sign Up</button>
              <button className="signin" onClick={toSignIn}>Sign In</button>
              </>
              :
              <>
              <div className="shopId">AB1SC3</div>
              <div className="location">ChandKheda Ahmedabad</div>
              <img src={profile_icon} alt="" className="profile" />
              </>
            }
          </div>        

            
        </div>
    
  )
}

export default HeadingPrintMe
