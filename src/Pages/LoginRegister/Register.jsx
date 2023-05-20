import React, { useContext, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [accepted, setAccepted] = useState(false);

    const handleCheck = (e)=>{
        setAccepted(e.target.checked);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');

            })
            .catch(error => console.log(error))


        console.log(name, photo, email, password)
    }
    return (
        <>
            <h1 className='text-2xl text-center'>Register your account</h1>
            <hr />
            <form onSubmit={handleRegister} className=' flex flex-col items-center mt-5'>
                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Type here" name='photo' className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Type here" name='email' className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Type here" name='password' className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Remember me</span>
                        <input onClick={handleCheck} type="checkbox" className="checkbox checkbox-primary" />
                    </label>
                </div>
                <button className='text-center bg-black text-white rounded px-3 py-2 mt-2 ' disabled ={accepted}>Register</button>

                {/* <p>{uerror}</p> */}
            </form>
        </>
    );
};

export default Register;