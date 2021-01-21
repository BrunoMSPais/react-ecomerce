import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './LogIn.css'
import { auth } from '../../firebase'

function LogIn() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [passowrd, setPassword] = useState('')

    const onSignIn = e => {
        e.preventDefault()

        // using firebase signin method
        auth.signInWithEmailAndPassword(email, passowrd)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const onRegister = e => {
        e.preventDefault()

        // using firebase register method
        auth.createUserWithEmailAndPassword(email, passowrd)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link exact to='/'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon_logo"
                    className="login_logo"
                />
            </Link>

            <div className="login_container">
                <h1>Sign-In</h1>

                <form action="submit">
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={passowrd}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        className='login_signInBtn'
                        type='submit'
                        onClick={onSignIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree <strong>THIS AMAZON CLONE PAGE</strong> Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                </p>

                <button
                    className='login_registerBtn'
                    type='submit'
                    onClick={onRegister}
                >
                    Create your Account
                </button>
            </div>
        </div>
    )
}

export default LogIn
