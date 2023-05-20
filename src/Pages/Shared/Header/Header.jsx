import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";
import { FaPersonBooth } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';



const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut().then(result => navigate('/')).catch(error => console.log(error));
    }
    return (
        <>
            <div className='text-center mb-2'>
                <img className='mx-auto' src={logo} alt="" />
                <p className='font-light'>Journalism Without Fear or Favour</p>
                <p className='text-xl'>{moment().format('dddd, MMMM D YYYY, h:mm:ss a')}</p>
            </div>
            <div className='mb-2 flex bg-slate-300 p-1 rounded'>
                <button className='bg-red-400 ps-2 text-white rounded p-2 text-xl'>Latest </button>
                <Marquee className='text-xl'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="">About</Link></li>
                                <li><Link to="">Carrer</Link></li>
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="">Home</Link></li>
                            {/* <Link to="/login">Login</Link> */}
                            <li><Link to="">About</Link></li>
                            <li><Link to="">Carrer</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex items-center justify-between">

    

                            {
                                user ?
                                    <div className='flex items-center'>
                                        <FaPersonBooth></FaPersonBooth><Link onClick={handleLogout}>Log out</Link>
                                    </div> :
                                    <Link to='/login' >Log in</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;