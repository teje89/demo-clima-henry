import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import data, { Cairns } from './data.js';
import Nav from './components/Nav.jsx';
import { Route } from 'react-router-dom';
import About from './components/About';
import Ciudad from './components/Ciudad'

const API_KEY = process.env.REACT_APP_API_KEY //variables de entorno, por seguridad, react pide tb MAYUS

function App() {
  const [cities, setCities] = useState([]);

  function handleAddCity (city) {
    setCities((prevCities) => {
      return [city, ...prevCities];
    });
  }

  function handleRemoveCity (cityId) {
    setCities ((prevCities) => {
      return prevCities.filter((city) => { //va a recorrer todos los elem del arr ejecuta func, si es false no lo agrega 
        return cityId !== city.id;
      });
    });
  }

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          handleAddCity(ciudad);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

  return ( //ya no trabajamos con data "de mentira", trabajaamos con data real que viene de API
    <div className="App">
      <Route path="/">
        <Nav onSearch={onSearch} />
      </Route>
      <Route path="/" exact>
        <Cards cities={cities} onRemove={handleRemoveCity} /> 
      </Route>
      <Route path="/about" component={About} />
      <Route path="/ciudad/:id" exact render={({match}) => {
        const city = cities.find((city)=>city.id === parseInt(match.params.id));
        return city ?  <Ciudad city={city} /> : <h1> 404 | NOT FOUND </h1>
      }}/>
  
      </div>
  );
}

export default App;
