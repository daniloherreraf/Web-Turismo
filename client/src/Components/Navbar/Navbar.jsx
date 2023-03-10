import React from 'react'
import "./Navbar.css"

import { AiFillCloseCircle, AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { TbGridDots } from "react-icons/tb"
import { useState } from "react"



const Navbar = () => {
  //lets display the Navbar
  const [active, setActive] = useState("menuDiv")

  const showNavBar = ()=>{
    setActive("menuDiv activeNavbar")
  }

  //let remove the Navbar
  const removeNavBar = ()=>{
    setActive("menuDiv")
  }

  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">"LlanoTour"(nombre ficticio de la empresa es a modo de ej</h3>
        </div>


        <div className={active}>
          <ul className="menuLists">
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Inicio</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Acerca de</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Nuestros Tours</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Galería</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Contacto</a>
            </li>
            <li className="navItem">
              <a href="#" onClick={removeNavBar} className="menuLinks">Paginas</a>
            </li>
          </ul>

          <div onClick={removeNavBar} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>


        <div className="socialIcons flex">
          <BsFacebook className='icon'/>
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <AiFillInstagram className='icon'/>
        </div>

        <div onClick={showNavBar} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar