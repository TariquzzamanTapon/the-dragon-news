import React, { useContext } from 'react';
import {Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/';

    const handleLoginSystem = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from,{replace: true}); 
             
                
            })
            .catch(error => {
                console.log(error)
               
            })

    }
    return (
        <>
            <form onSubmit={handleLoginSystem} className=' mt-3 flex flex-col items-center'>
                <h1 className='text-2xl'>Please Login Here</h1>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Type here" name='email' className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Type here" name='password' className="input input-bordered w-full max-w-xs" required />
                </div>
                <button className='text-center bg-black text-white rounded px-3 py-2 mt-2'>Login</button>
                <p>Dont’t Have An Account ? <Link to ="/register" className='text-red-600 underline'>Register</Link></p>
            </form>
        </>
    );
};

export default Login;