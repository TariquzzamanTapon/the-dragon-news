import React from 'react';
import { FaGoogle } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import QZone from '../QZone/QZone';
const RightSide = () => {
    return (
        <>
            <div>
                <div className="mb-3">
                    <h1 className='text-xl mb-1 font-bold'>Login With</h1>
                    <div className='mb-1'>
                        <button className="btn btn-outline w-full "><FaGoogle /><span className='mx-2'>Login With Google</span></button>
                    </div>
                    <div className='mb-1'>
                        <button className="btn btn-outline w-full "><FaGithub /><span className='mx-2'>Login With Github</span></button>
                    </div>
                </div>

                <div className='mb-3'>
                    <div className="text-center">
                        <h1 className='text-left text-xl mb-1 font-bold'>Find Us On</h1>
                        <Link className='border-black border block p-2 flex items-center m-1' to=""> <FaFacebook />Facebook</Link>
                        <Link className='border-black border block p-2 flex items-center m-1' to=""><FaTwitterSquare /> Twiter</Link>
                        <Link className='border-black border block p-2 flex items-center m-1' to=""><FaInstagram></FaInstagram> Instagram</Link>
                    </div>
                </div>
                <QZone></QZone>
            </div>
        </>
    );
};

export default RightSide;