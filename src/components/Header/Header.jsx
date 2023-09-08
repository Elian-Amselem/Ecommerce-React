import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'; 

import logo from "../../assets/img/Logo/logo.png";

function Header() {
    return (
        <div>
            <header>
                <img className="logo" src={logo} alt="Logo de VicioGames" />
                <h1 className="titulo">VicioGames</h1>
                <div className="iconos">
                    <a href="#"><FontAwesomeIcon icon={faUser} /></a>
                    <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
                </div>
            </header>
        </div>
    );
}

export default Header;