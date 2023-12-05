import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import logo from "../../assets/multimedia/removebg/ideogram1.png";

function Header() {
    return (
            <header>
                <img className="logo" src={logo} alt="Logo de VicioGames" />
                <h1 className="titulo">VicioGames</h1>
                <div className="iconos">
                    <a href="#"><FontAwesomeIcon icon={faUser} /></a>
                    <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
                </div>
            </header>
    );
}

export default Header;