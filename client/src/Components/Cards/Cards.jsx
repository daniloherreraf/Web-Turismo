import React from 'react'
import "./Cards.css"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"


// Imported Images

// imported icon
import { AiOutlineSwapRight } from 'react-icons/ai'


const Cards = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='cards'>
      <div data-aos="fade-up" data-aos-duration="2000" className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src="https://viajaporcolombia.com/images/coleo.jpg"/>
          </div>
          <h4 className="textDiv">
            Festival Internacional del Coleo
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src="https://storage.contextoganadero.com/s3fs-public/economia/field_image/2022-03/expomalocas-2022.jpg"/>
          </div>
          <h4 className="textDiv">
            Expo Malocas
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src="https://noticieromacarena.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-30-at-10.51.06-PM.jpeg"/>
          </div>
          <h4 className="textDiv">
            Festival Globos Aerostaticos
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src="https://radionacional-v3.s3.amazonaws.com/s3fs-public/senalradio/articulo-noticia/galeriaimagen/img_0061.jpg"/>
          </div>
          <h4 className="textDiv">
            Festival Cuadrillas San Martin - Meta
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/JSLN2UBTTBB4TB73Q6PNBGN2YY.jpg"/>
          </div>
          <h4 className="textDiv">
            Torneo Internacional del Joropo
          </h4>
        </div>
        
      </div>

      <div className="spanText flex">
        Otros Festivales<AiOutlineSwapRight className='icon'/>
      </div>
    </div>
  )
}

export default Cards