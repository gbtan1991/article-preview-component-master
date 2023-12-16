import React from 'react'
import { FaFacebook, FaFacebookF, FaFacebookSquare, FaPinterest, FaShare, FaTwitter } from "react-icons/fa";


const Share = ({toggleShare}) => {
  return (
    <div className=' px-8 bg-veryDarkGrayisBlue flex items-center justify-around  rounded-br-xl rounded-bl-xl w-full h-[65px]'>
        <div className='flex flex-row gap-5 items-center'>
        <p className='text-lightGrayishBlue font-extralight font-Manrope text-sm '>S H A R E</p> 
        <FaFacebookSquare color='#fff' size={23}/>
        <FaTwitter color='#fff' size={23}/>        
        <FaPinterest color='#fff' size={23}/>
        </div>
        <button className="bg-desaturatedDarkBlue w-8 h-8 rounded-full flex items-center justify-center" onClick={toggleShare}>
        <FaShare  color='#fff'/>
              </button>
    </div>
  )
}

export default Share
