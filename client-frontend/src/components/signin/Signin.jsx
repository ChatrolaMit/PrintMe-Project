import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../services/firebase'
import './signin.css'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submitEvent = (e) => {
        // console.log()
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user.email)
                localStorage.setItem('user', JSON.stringify(userCredential.user.email))
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (

        <div className='signinContainer'>
            <form onSubmit={submitEvent} className='signinForm'>
                <h1 className='signinHeading'>Log in</h1>
                <div className="signinInputContainer">
                    <input className='signinInput' type="email" name="email" id="email" placeholder='Enter Your Email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input className='signinInput' type="password" name="password" id="password" placeholder='Enter Your Password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button type="submit" className='signinSubmit'>Register</button>
                </div>
            </form>
            {/* Signin */}
        </div>
    )
}

export default Signin
