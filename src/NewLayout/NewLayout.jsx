import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import RightSide from '../Pages/Shared/RightSide/RightSide';
import Footer from '../Pages/Shared/Footer/Footer';

const NewLayout = () => {
    return (
        <>
            <div className='container mx-auto my-2' >
                <Header></Header>
                <div className='grid md:grid-cols-3 '>
                    <div className='col-span-2'>
                        <Outlet></Outlet>
                    </div>
                    <div className=' '>
                        <RightSide></RightSide>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        </>
    );
};

export default NewLayout;