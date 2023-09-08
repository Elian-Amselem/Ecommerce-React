import React from 'react'
import logo from "../../assets/img/Logo/logo.png"
function Header() {
  return (
    <div>
     <header>
        <img className="logo" src={logo}/>
        <h1 className="titulo">VicioGames</h1>
        <div className="iconos">
            <a href="#"><i className="fa-solid fa-user"></i></a>
            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
        </div>
    </header>
    </div>
  )
}
export default Header