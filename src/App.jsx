import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import { Outlet } from 'react-router-dom'
import LeftSide from './Pages/Shared/LeftSide/LeftSide'
import RightSide from './Pages/Shared/RightSide/RightSide'

function App() {

  return (
    <div className='container mx-auto my-2' >
      <Header></Header>

      <div className='grid md:grid-cols-4 '>
        <div className=''>
            <LeftSide></LeftSide>
        </div>

        <div className='col-span-2'>
          <Outlet></Outlet>
        </div>
        <div className=' '>
           <RightSide></RightSide>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
