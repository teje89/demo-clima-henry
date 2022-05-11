import React from 'react';
import Card from "./Card";
import styles from './styles/Cards.module.css';

export default function Cards({cities, onRemove}) {
  // acá va tu código
  // tip, podés usar un map
  return ( <div className={styles.container}>
              {cities.map((city) => (
                  <Card //lo que queremos renderizar
                  key={city.id} //vamos a necesitar key cdo trabajemos con renderizado compuesto
                  max={city.max}
                  min={city.min}
                  name={city.name}
                  img={city.img}
                  id={city.id}
                  onClose={() => onRemove(city.id)}
                  />
                )) 
              }
  </div>
  )
};