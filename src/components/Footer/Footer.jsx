import React from 'react';
import walter from "../../assets/img/walter.jpg"
import elian from "../../assets/img/elian.jpg"
import franco from "../../assets/img/franco.jpg"

function Footer() {
    return (
        <div>
            <footer>
                <p>Derechos Reservados ©️2023</p>
                <br />
                <div className="container">
                    <div className="card">
                        <img src={walter} alt="Walter" />
                        <h4>Walter Coronel</h4>
                        <p>Programador Web Full Stack JR</p>
                        <div className="redes">
                            <a href="https://www.instagram.com/walter._.coronel/" target="_blank" rel="noopener noreferrer"></a>
                            <a href="https://www.linkedin.com/in/walter--coronel/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/WalterCoronel2000" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={elian} alt="Elian" />
                        <h4>Elian Amselem</h4>
                        <p>Programador Web Full Stack JR</p>
                        <div className="redes">
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/elian-amselem/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/Elian-Amselem" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={franco} alt="Franco" />
                        <h4>Franco Ruiz</h4>
                        <p>Programador Web Full Stack JR</p>
                        <div className="redes">
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/franco-ruiz10/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/FrancoRuiz10" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;