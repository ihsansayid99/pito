import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

//import image 
import CPLOGIN from 'assets/images/cp-login.png'
import { ReactComponent as PitoLogo } from 'assets/images/pito.svg'
import { ReactComponent as LoginIcon } from 'assets/images/login-icon.svg'
import { ReactComponent as PasswordIcon } from 'assets/images/password-icon.svg'
import { ReactComponent as FbIcon } from 'assets/images/fb-icon-square.svg'
import { ReactComponent as GoogleIcon } from 'assets/images/google-icon-colorful.svg'
import { ReactComponent as GoogleplaySign } from 'assets/images/googleplay-sign.svg'
import { ReactComponent as AppstoreSign } from 'assets/images/appstore-sign.svg'


//import API function
import users from 'api/users'

//import setAuthorizationHeader
import { setAuthorizationHeader } from 'configs/axios'

//Import toastify notify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ history }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //state error handler
    const [errors, seterrors] = useState(null)

    //username on Change text
    function usernameChange(e) {
        setUsername(e.target.value)
    }
    //password on Change text
    function passwordChange(e) {
        setPassword(e.target.value)
    }

    //Check tokens if ready
    const token = localStorage.getItem('PITO:token')
    useEffect(() => {
        if (token) {
            history.push('/')
        }
    })

    //on submit Login
    const submit = (e) => {
        e.preventDefault();

        //use function login from users
        users.login({
            username,
            password
        }).then((res) => {
            setAuthorizationHeader(res.token);
            localStorage.setItem('PITO:token', JSON.stringify(res.token))
            toast.success("Berhasil Login !")
            setTimeout(() => {
                history.push("/")
            }, 2000);
        }).catch(err => {
            seterrors(err?.response?.data?.message)
        })
    }

    return (
        <section className="login-clipping w-full">
            <ToastContainer position="top-right" />
            <div className="clipper hidden md:block"></div>
            <div className="hidden md:absolute md:block">
                <img draggable="false" src={CPLOGIN} alt="pito logo" />
            </div>
            <div className="container mx-auto flex justify-end py-20">
                <div className="w-full md:w-1/2 md:px-24">
                    <PitoLogo className="mx-auto" />
                    <div className="pt-24 px-10">
                        <form onSubmit={submit}>
                            <div className={["pt-10 flex border-b-2 items-center pb-2 text-xl", errors ? "border-red-600" : "border-gray-400"].join(" ")}>
                                <LoginIcon />
                                <input type="text" name="username" value={username} onChange={usernameChange} className="ml-3 focus:outline-none relative w-full" placeholder="Username" />
                            </div>
                            <div className={["pt-10 flex border-b-2 items-center pb-2 text-xl", errors ? "border-red-600" : "border-gray-400"].join(" ")}>
                                <PasswordIcon />
                                <input type="password" name="password" value={password} onChange={passwordChange} className="ml-3 focus:outline-none relative w-full" placeholder="Password" />
                            </div>
                            <button type="submit" className="bg-red-600 py-2 px-10 w-full mt-6 text-xl rounded-3xl text-white font-medium hover:bg-red-700 transition-all duration-200 focus:outline-none">Login</button>
                            <div className="text-center mt-4">
                                <Link to="/merchant/forgot-password" className="text-red-600 border-b border-red-600 font-light hover:font-medium">Forgot Password?</Link>
                            </div>
                        </form>
                    </div>

                    <div className="socmed-icon-login flex justify-center items-center mt-12">
                        <h6 className="text-lg font-light text-gray-700 px-4">Or Continue with
                        </h6>
                        <span className="flex"><FbIcon className="mr-4" /> <GoogleIcon /></span>
                    </div>

                    <div className="flex flex-col mt-8">
                        <h6 className="text-lg font-light mx-auto text-gray-700 px-4">Not a member yet?
                        </h6>
                        <h6 className="text-lg font-light mx-auto text-gray-700 px-4"><span className="font-medium text-red-600">Create Accout</span> Via Download Pito App
                        </h6>
                        <div className="flex px-4 mx-auto">
                            <GoogleplaySign className="w-40 mr-4" />
                            <AppstoreSign className="w-40" />
                        </div>
                        <div className="px-4 mx-auto">
                            <h6 className="text-lg font-light text-gray-700 px-4">Contact Pito at admin@pito.com.sg</h6>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default withRouter(Login);
