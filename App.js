import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./Images/Logo.png"
import Card from "./Componentes/Card/Card";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Episodes from "./Pages/Episodes";
import CardDetails from "./Componentes/Card/CardDetails";
import Generador from "./Pages/Generador";

// components
import Navbar from "./Componentes/Navbar";
import CharacterList from "./Componentes/CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
       
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/generador" element={<Generador />} />
        <Route path="/generador/:id" element={<Generador />} />
       
      </Routes>
    </Router>
      

      <div className=" pb-2 ps-2  bg-dark  rounded-5">
        <center><img src={logo} alt="Rick and Morty" /></center>
      </div>

      <CharacterList characters={characters} />

      <div className=" bg-dark">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link bg-success text-dark" onClick={handlePreviousPage}>
                  Anterior
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link bg-success text-dark" onClick={handleNextPage}>
                  Siguiente
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;