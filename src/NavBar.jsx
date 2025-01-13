import React, { useEffect, useState } from 'react'
import logo from './assets/logo.jpg'
import { Link } from "react-router-dom";
export default function NavBar() {
  const[appear , setAppear] = useState(false)
  const[toggle , setToggle] = useState(false)
  
  function handleSize() {
    let width = window.innerWidth
    if(width <= 650)
     setAppear(true)
   else setAppear(false)
  }
  useEffect(()=>{
     handleSize()
    window.onresize = ()=>{
      handleSize()
    }
  },[])
  return (
    <nav className={`flex w-full	 items-start justify-around py-3 bg-gray-950 ${toggle ? 'h-fit': 'h-16'} `} >
        <div className='flex items-center gap-2'>
            <img src={logo} alt="" className='h-10 w-20 rounded' />
            <h1 className='text-white font-bold text-lg'>AYMEN | FRONTEND WEB DEVELOPER</h1>
        </div>
        <div className = 'flex flex-col md:flex-row gap-3 text-white items-center  pr-4'>
        {
              appear &&
              <>
              <div className={`bars flex flex-col gap-2 cursor-pointer ${toggle ? 'hidden' : ''}`} onClick={()=>setToggle(true)}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className={`bars1 mb-5 relative flex flex-col gap-2 cursor-pointer ${!toggle ? 'hidden' : ''}`} onClick={()=>setToggle(false)}>
                <p></p>
                <p></p>
            </div>
            </>
            }
            <Link to="/" className={appear && !toggle ? 'hidden' : ''}>Home</Link>
            <Link to="/About" className={appear && !toggle ? 'hidden' : ''}>About</Link>
            <Link to="/Projects" className={appear && !toggle ? 'hidden' : ''}>Projects</Link>
            <Link to="/Contact" className={appear && !toggle ? 'hidden' : ''}>Contact</Link>
            <Link download="AymenCv.pdf" to="/cv.pdf" target="_blank"   className={`${appear && !toggle ? 'hidden' : ''}  text-white bg-green-500  py-1 rounded-md duration-500 hover:bg-green-700 w-28 text-center`}>
              Donload Cv
            </Link>

           
        </div>
      
    </nav>
  )
}
