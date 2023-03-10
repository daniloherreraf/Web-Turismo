import React from 'react'
import "./Review.css"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

const Review = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='review section'>
      <div className="secContainer">
        <span className="secTitle">
          Los Comentarios de los Clientes
        </span>

        <div className="reviewContainer container grid">

          <div data-aos="fade-up" data-aos-duration="2500" className="singleReview">
           <div className="imgDiv">
            <img src="https://cdn-3.expansion.mx/dims4/default/cc57256/2147483647/strip/true/crop/1255x836+0+0/resize/1200x799!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ffb%2Fe0%2Fceb66a1b48c3958a8efd32f17f42%2Fistock-931476458.jpg"/>
           </div>

           <p>
           Viaje con mi hermana al tour por caño cristales, mis amigos me decian que era algo único y así fue. Los Llanos Orientales tienen una magia, la naturaleza es magnifica, el río, las aves, las cascadas... Super recomendado. 
           </p>

           <div className="name">
            Maria Jimenez
           </div>


          </div>

          <div data-aos="fade-up" data-aos-duration="2000" className="singleReview">
           <div className="imgDiv">
            <img src="https://elcomercio.pe/resizer/0vKovTO0oqAWC3P4M1dJjQdO9aY=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/Z4WUYKIOJVGSBO7E6IV3DM3RDY.jpg"/>
           </div>

           <p>
           Fui a las piscinas del Guejar y me encanto, caminar entre la Naturaleza, el Lajon, las piscinas, ver como una comunidad sale adelante apoyados en el turismo.
           </p>

           <div className="name">
            Segismundo y Ana
           </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Review