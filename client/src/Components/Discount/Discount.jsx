import React from 'react'
import "./Discount.css"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const Discount = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='discount'>
      <div className="secContainer">
        <video src="https://v.ftcdn.net/04/19/01/40/700_F_419014051_zSaFf3TexHFVqIxpEuDYI1CDIfyEPPxE_ST.mp4" autoPlay loop muted typeof='mp4' ></video>
        <div className="textDiv">
          <span data-aos="fade-up" data-aos-duration="2000" className="title">
            registrate para un 10% de descuento
          </span>
          <p data-aos="fade-up" data-aos-duration="2500">
          desea obtener un descuento instantáneo para su próximo viaje a cualquiera de nuestros tours
          </p>

          <div data-aos="fade-up" data-aos-duration="3000" className="input_btn flex">
            <input type="text" placeholder='Ingresa tu Email' />
            <button className='btn'>Suscribete</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Discount