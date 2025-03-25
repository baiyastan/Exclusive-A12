import React from 'react'
import "./style/Register.scss"
import phone from "../assets/image/phone.png"

function Register() {
    return (
        <div className='register'>

            <div className="register-img">
                <img src={phone} alt="" />
            </div>
            <div className="register-total">
                <div className="total">
                    <div className="register-exs">
                        <h5>Log in to Exclusive</h5>
                        <p>Enter your details below</p>
                    </div>
                    <div className="register-email">
                        <div className="email-text">
                            <input type="text" placeholder='Email or Phone Number' />
                            <div className="line"></div>
                        </div>
                        <div className="password">
                            <input type="text" placeholder='Password' />
                            <div className="line"></div>

                        </div>

                    </div>
                </div>

                <div className="register-btn">
                    <button>Log in</button>
                    <p>Forget Password?</p>

                </div>



            </div>


        </div>
    )
}

export default Register
