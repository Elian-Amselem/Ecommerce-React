import React from 'react';
import Cards from "./Cards"
import CardsData from "./CardsData"

function Footer() {
    return (
        <div>
            <footer>
                <p>Derechos Reservados ©️2023</p>
                <br />
                <div className='home-cards'>
                    <Cards details={CardsData}/>
                </div>
            </footer>
        </div>
    );
}

export default Footer;