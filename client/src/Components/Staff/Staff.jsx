import React from 'react'
import "./Staff.css"
import { useEffect } from "react"

import Aos from "aos"
import "aos/dist/aos.css"

const Staff = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='staff container section'>
      <div className="secContainer">
        <span className="secTitle">
          Somos un Equipo - Con una mision
        </span>

        <div className="staffContainer grid">
          <div  data-aos="fade-up" data-aos-duration="2000"  className="singleStaff">
            <div className="imgDiv">
              <img src="https://www.efeprimace.co/wp-content/uploads/2018/12/avatar-hombre.jpg"  />
            </div>

            <span className="name">
              Wilson 
            </span>
            <span className="jobTitle">
              CEO "LlanoTour"(nombre de la empresa es ficticio es a modo de ej)
            </span>
            <span className="contact">
              +123 123 1231
            </span>
          </div>

          <div  data-aos="fade-up" data-aos-duration="2500"  className="singleStaff">
            <div className="imgDiv">
              <img src="https://valleyadventours.com/wp-content/uploads/2018/03/avatar-mujer.jpg"  />
            </div>

            <span className="name">
              Mariana 
            </span>
            <span className="jobTitle">
              Auxiliar Administrativa
            </span>
            <span className="contact">
              +456 456 4564
            </span>
          </div>

          <div  data-aos="fade-up" data-aos-duration="3000"  className="singleStaff">
            <div className="imgDiv">
              <img src="https://valleyadventours.com/wp-content/uploads/2018/03/avatar-hombre.jpg"  />
            </div>

            <span className="name">
              Pedro 
            </span>
            <span className="jobTitle">
              Guia Turistico
            </span>
            <span className="contact">
              +789 789 7897
            </span>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Staff