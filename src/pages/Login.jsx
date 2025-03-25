import React, {useState} from 'react'
import "./style/Login.scss"
import { Link } from 'react-router-dom'
import phone from "../assets/image/phone.png"
import google from "../assets/svg/google.svg"
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function createUser () {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            console.log(res);
            
        } catch (error) {
            console.log(error);            
        }
    }


    return (
        <div className='login'>

            <div className="log-img">
                <img src={phone} alt="" />
            </div>
            <div className="log-total">
                <div className="total">
                    <div className="log-exs">
                        <h5>Create an account</h5>
                        <p>Enter your details below</p>
                    </div>
                    <div className="log-email">
                        <div className="email-text">
                            <input type="text" placeholder='Name' />
                            <div className="line"></div>
                        </div>
                        <div className="password">
                            <input 
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} 
                                type="email" 
                                placeholder='Email or Phone Number'
                                 />
                            <div className="line"></div>

                        </div>

                        <div className="password">
                            <input 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} 
                            type="password" 
                            placeholder='Password' />
                            <div className="line"></div>

                        </div>

                    </div>
                </div>

                <div className="log-btn">
                    <button onClick={createUser}>Create Account</button>
                    <div className="gogle">
                        <img src={google} alt="" />
                        <p>Forget Password?</p>
                    </div>
                    <div className="log-have">
                        <p>Already have account?</p>
                        <Link to="/register">Log in</Link>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default Login
