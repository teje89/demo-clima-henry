import React from 'react';
import s from './styles/Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  //se usa `${ para cuando le tenemos que dar mas de una clase}
  return <div className={s.card}>
              <button onClick={onClose} className={`${s.btn} ${s.btnColor}`}> X </button> 
              <h4>{name}</h4>
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
              <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        </div>
};
  