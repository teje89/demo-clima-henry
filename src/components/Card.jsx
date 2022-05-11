import React from 'react';
import s from './styles/Card.module.css';
import icon_09d from '../assets/09d.png'
import icon_03n from '../assets/03n.png' 
import {Link} from 'react-router-dom'
//import {AiOutlineCloseCircle} from 'react-icons/ai' <AiOutlineCloseCircle/> npm install react-icon usar iconos

export default function Card({max, min, name, img, onClose, id}) {
  // acá va tu código
  //se usa `${ para cuando le tenemos que dar mas de una clase}
  return <div className={s.card}>
              <button onClick={onClose} className={`${s.btn} ${s.btnColor}`}> X
                
              </button> 
              <Link to={`/ciudad/${id}`} >
              <h4>{name}</h4>
              </Link>
              <div className={s.middleDiv}>
                <div className={s.temp}>
                <p>Min</p>
                <p>{min}</p>
                </div>
                <div className={s.temp}>
                <p>Max</p>
                <p>{max}</p>
                </div>
              </div>
              <WeatherIcon icon={img} />
        </div>
};
  
function WeatherIcon({ icon }) {
  switch (icon) {
    case "03n" : return <img src={icon_03n} alt="cloudy_flaticon" />;
    default:
      return <img src={icon_09d} alt="rainy_flaticon" />;
  }
}