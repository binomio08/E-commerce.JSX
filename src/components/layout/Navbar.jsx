import React from "react";
import '../../App.css'
import Mando from "../assets/mando.ico";

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src={Mando} alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" >Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" >Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default navbar;
