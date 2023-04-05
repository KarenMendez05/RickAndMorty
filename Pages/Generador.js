
import React, { useState, useEffect } from 'react';
import style from  "./generador.scss"; 

function Generador() {
    const [personajes, setPersonajes] = useState([]);
    const [personajeAleatorio, setPersonajeAleatorio] = useState(null);
    const [personajeActual, setPersonajeActual] = useState(null);
    const [listaPersonajes, setListaPersonajes] = useState([]);
  
    const obtenerTodosLosPersonajes = async () => {
      let url = 'https://rickandmortyapi.com/api/character';
      let todosLosPersonajes = [];
      while (url) {
        const response = await fetch(url);
        const data = await response.json();
        todosLosPersonajes = [...todosLosPersonajes, ...data.results];
        url = data.info.next;
      }
      setPersonajes(todosLosPersonajes);
    };
  
    const generarPersonajeAleatorio = () => {
      const indiceAleatorio = Math.floor(Math.random() * personajes.length);
      const personajeSeleccionado = personajes[indiceAleatorio];
      setPersonajeAleatorio(personajeSeleccionado);
      setPersonajeActual(personajeSeleccionado);
      setListaPersonajes([...listaPersonajes, personajeSeleccionado]);
    };
  
    useEffect(() => {
      obtenerTodosLosPersonajes();
    }, []);
  
    return (
      <div className='generador-container'>
        <div className="izq">
          {personajeActual && (
            <>
              <img src={personajeActual.image} alt={personajeActual.name} />
              <p className='nombre-iz'>Nombre: {personajeActual.name}</p>
              <p>Character ID: {personajeActual.character} </p>
              <p>Status: {personajeActual.status}</p>
          <button className='generar-btn' onClick={generarPersonajeAleatorio}>Generar</button>
            </>
          )}
        </div>
        <div className="der">
          <ul>
            {listaPersonajes.map((personaje, index) => (
              <li key={index}>
                <img src={personaje.image} alt={personaje.name} />
                <img src={personajeAleatorio} alt={personajeAleatorio.name}/>
                <p>{personaje.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Generador;