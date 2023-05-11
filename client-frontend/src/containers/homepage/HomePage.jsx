import React, { useEffect, useState } from 'react'

import Signup from '../../components/signup/Signup'
import Nav from '../../components/navbar/Nav'

import './HomePage.css'
import HeadingPrintMe from '../../components/heading/HeadingPrintMe'
import Signin from '../../components/signin/Signin'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'


const HomePage = () => {
  const [auth,setAuth] = useState(localStorage.getItem('user'))
  const navigate = useNavigate()

  useEffect(()=>{
    setAuth(localStorage.getItem('user'))
  },[auth])


  
  return (
    <div class="homepage">
      <div className="mainContainer">
        {!auth?
          <div className="signContainer">
            <Signup />
          </div>
          :
          <div className='homepageContainer'>
            <div className="navbarContainer">
              <Nav />
            </div>
            <div className="elementContainer">
              
              <div className="element"><Outlet/></div>
            </div>
            </div>

        }

      </div>
    </div>
  )
}

export default HomePage
