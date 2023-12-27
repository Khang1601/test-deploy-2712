import React from 'react'
import './register.scss'

import { UserCreate } from '@/interfaces/user.interface'
import { api } from '@/services/apis'
import { Modal, message } from 'antd'
import { useNavigate } from 'react-router-dom'


export default function Register() {
    const navigate = useNavigate();

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();
        try {
            let newUser: UserCreate = {
                userName: (e.target as any).userName.value,
                email: (e.target as any).email.value,
                password: (e.target as any).password.value,
                avatar: "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-avatar-vector-isolated-on-white-background-png-image_1694546.jpg"
            }
            let result = await api.doList.register(newUser);

            // console.log("newUser", newUser);
            // console.log("result",result);


            if (result.status == 200) {
                Modal.success({
                    title: "Thong Bao",
                    // content: "Tao tai khoan thanh cong",
                    content: result.data.message,
                    onOk: () => {
                        // window.location.reload()
                        navigate("/login")
                        }
                })
            }



        } catch (error: any) {
            console.log("error", error);
            
            // message.error(error?.response?.data?.message || "Loi server")

            Modal.error({
                title: "Thong Bao",
                content: error?.response?.data?.message || "Tao tai khoan that bai",
            })
            
        }
    }   

    
    return (
        <div id="login-box">

            <form onSubmit={(e: React.FormEvent) => {
                handleRegister(e)
            }}>
                <div className="left">
                    <h1>Register</h1>
                    <input type="text" name="userName" placeholder="userName" />
                    <input type="text" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" autoComplete="on" />
                    <button type="submit" className='social-signin'>Sign Up</button>

                </div>

                <div className="right">
                    <span className="loginwith">
                        Sign in with
                        <br />
                        social network
                    </span>
                    <button className="social-signin facebook">Log in with facebook</button>
                    <button className="social-signin twitter">Log in with Twitter</button>
                    <button className="social-signin google">Log in with Google+</button>
                </div>
                <div className="or">OR</div>

            </form>


        </div>
    )
}
