import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../../services/firebase'
import './signup.css'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitEvent = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <div className='signupContainer'>
            <form onSubmit={submitEvent} className='signupForm'>
                <h1 className='signupHeading'>Sign up</h1>
                <div className="signupInputContainer">
                    <input className='signupInput' type="email" name="email" id="email" placeholder='Enter Your Email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input className='signupInput' type="password" name="password" id="password" placeholder='Enter Your Password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    <button type="submit" className='signupSubmit'>Register</button>
                </div>
            </form>
            {/* Signin */}
        </div>
    )
}

export default Signup
