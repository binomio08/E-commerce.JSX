import React from "react";
import '../../App.css'
import Mando from "../assets/mando.ico";
import {Link,} from "react-router-dom"
import CartWidget from "./Cartwidget";


const navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-black navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>
                        <img className="logo" src={Mando} alt="" />
                    </Link>
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
                                <Link className="nav-link active" aria-current="page" to= {'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/monitores'>Monitores</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/placas'> Placas de Video</Link  >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/combos'> Combo Actualización</Link  >
                            </li>
                            <li className="nav-item">
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default navbar;
