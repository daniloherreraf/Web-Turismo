import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import "./Tour.css"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const Tour = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='tours container section'>
      <div className="secContainer">
        <span className="secTitle">
          Llano Tours
        </span>

        <div className="tourContainer">

          <div data-aos="fade-up" data-aos-duration="2000" className="singleTour grid">
            <div className="imgDiv">
              <img src="https://www.nationalgeographic.com.es/medio/2014/09/16/ogrunewald_cano_cristales_24_1800x1201.jpg" />

            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="tourInfo">
              <span className="tourTitle">
                Caño cristales
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>

                <small className='custReview'>
                  2 Customer Review
                </small>
              </div>

              <p>
              Caño Cristales nace cerca de los tepuis más antiguos de la sierra de La Macarena. Otros caños, como Indio, Canoas y Yarumales, fluyen por la región, pero ninguno iguala a este en tan impactante colorido. Rojo, amarillo, negro, azul. Caño Cristales exhibe una auténtica paleta de colores a su serpenteante paso por un paraje excepcional, el Parque Nacional Natural Sierra de La Macarena, territorio, ubicado en el departamento del Meta, en el centro de Colombia. 
              <hr/>
              <a href="https://www.nationalgeographic.com.es/naturaleza/grandes-reportajes/el-rio-que-escapo-del-paraiso-2_8507">National Geographic</a>
              </p>
              <button className="btn">Comprar este Tour</button>
            </div>
            
            <span className="price">
              $ (precio)
            </span>

          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="singleTour grid">
            <div className="imgDiv">
              <img src="https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/sfdsv.jpg?h=73545cb6&itok=hI6VCoKD" />

            </div>
            <div data-aos="fade-up" data-aos-duration="3500" className="tourInfo">
              <span className="tourTitle">
                Rafting en Cañon del Guejar
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>

                <small className='custReview'>
                  2 Customer Review
                </small>
              </div>

              <p>
              El recorrido inicia, en época de invierno, en el embarcadero ‘El Limón’; cuando el nivel del río es más abajo, hay que subir a la balsa unos kilómetros más adelante. A los pocos metros de iniciar el trayecto, la magia de la naturaleza empieza a aflorar. Cascadas, aguas cristalinas que permiten apreciar diferentes especies de peces, descensos rocosos entre el agua que producen adrenalina, son algunas de las maravillas que se pueden apreciar.
              </p>
              <button className="btn">Comprar este Tour</button>
            </div>
            
            <span className="price">
              $ (precio)
            </span>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Tour