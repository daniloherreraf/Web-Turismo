import React from 'react'
import "./Footer.css"
import {HiPhone} from "react-icons/hi"
import{MdEmail}  from "react-icons/md"
import {GoLocation} from "react-icons/go"
import {FaFacebookF} from "react-icons/fa"
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='footer'>

      <div className="secContainer container">
        <div className="content grid">

          <div data-aos="fade-up" data-aos-duration="2000" className="row">
            <div className="spanText">
              CONTACTO
            </div>

            <div className="contactDiv">
              <span className="flex">
                <HiPhone className='icon'/>
                <span>+111 123 123 12</span>
              </span>
              <span className="flex">
                <MdEmail className='icon'/>
                <span>servicioalcliente@mail.com</span>
              </span>
              <span className="flex">
                <GoLocation className='icon'/>
                <span>Calle 123 # 5 -55. Avenida 40 Villavicencio - Meta</span>
              </span>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500"className="row">
            <div className="spanText">
              POPULAR NEWS
            </div>

            <div className="singleNews">
              <span className="text">
                "LlanoTour"(este nombre es fictisio) su Guia Personal En la Mayoria de los Lugares para visitar en el Meta - revista mundo turistico
              </span>
              <p>
                Enero 08, 2023
              </p>
            </div>

            <div className="singleNews">
              <span className="text">
              LlanoTour y su nuevo servicio. Cabalgata Ecologica y tour Gastronomico, San Martin
              </span>
              <p>
                Marzo 10, 2023
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="row">
            <div className="spanText">
              LINKS
            </div>
            <div className="footerLinks">
              <ul>
                <li>Sobre nosotros</li>
                <li>Nuestro Equipo</li>
                <li>Galeria</li>
                <li>Blog</li>
                <li>Trabaja con nosotros</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="bottomDiv flex">
          <p>Copyright 2023 - All rights reserved</p>

          <div className="social flex">
            <FaFacebookF className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon' />
            <AiFillInstagram className='icon'/>
          </div>

          <p>Politica de Privacidad</p>
        </div>
      </div>

    </div>
  )
}

export default Footer