import React from 'react'
import logo from "../assets/file.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa6"
import {FaSquareXTwitter} from "react-icons/fa6"
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="imagebox flex flex-shrink-0 items-center">
            <img src={logo} alt="" className='mx-2 w-[58px] h-[58px]' />
        </div>
        <div className="icons flex gap-[15px] text-3xl text-[white] cursor-pointer">
            <a href="https://www.instagram.com/sea__plus__plus/" target='_blank'> <FaInstagram/> </a>
            <a href="https://www.linkedin.com/in/devansh-upadhyay-4428a1228/" target='_blank'> <FaLinkedin/> </a>
            <a href="https://github.com/Devupadhyayaa" target='_blank' ><FaGithub/></a>
            <FaSquareXTwitter/>
        </div>

    </nav>
  )
}

export default Navbar
