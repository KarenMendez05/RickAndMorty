import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu text-light">
         <span className="text-primary"></span>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-light"></span>
          <span class="fas fa-times close text-light"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end text-light"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5 ">
            <NavLink to="/" className="nav-link text-light ">
              Personajes 
            </NavLink>
            <NavLink to="/episodes" className="nav-link text-light">
              Episodios
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link text-light"
              to="/generador"
            >
              Generador
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;