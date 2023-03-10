import React  from 'react'
import "./Home.css"
import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='home'>

      <div className="homeText">
        <span data-aos="fade-up" data-aos-duration="2000" className='spanText'>
          UN EQUIPO DE PROFESIONALES EXPERTOS EN TURISMO
        </span>

        <div data-aos="fade-up" data-aos-duration="4000" className="homeTitle">
          Confianza <strong>Nuestra Experiencia</strong>
        </div>

        <div data-aos="fade-up" data-aos-duration="6000" className="btn">Ponerse en Contacto</div>
      </div>



    </div>
  )
}

export default Home