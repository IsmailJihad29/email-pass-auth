import React, { useState } from 'react';

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
// firebase auth
const auth = getAuth(app)
/**
 * 
 *
 */

const Register = () => {
const [email, setEmail] = useState('')
    const handleEmailChange = (event) => {
        // console.log(event.target.value)
        setEmail(event.target.value)
    }
// submit button handler 
    const handleSubmit = (event) => { 
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)

        // firebase create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
            console.error(error)
        })
    }
/**
 * -------------------------------
 * --------------------------------
 */
    return (
        <div>
            <h1>Register Page</h1>
            <h3>Please Register Here</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Type Your Email Here' /> <br />
                <input type="password" name="password" id="password" placeholder='Type Your Password Here' /> <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;