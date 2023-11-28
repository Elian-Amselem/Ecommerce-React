import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import walter from "../../assets/multimedia/img/walter.jpg";
import elian from "../../assets/multimedia/img/elian.jpg";
import franco from "../../assets/multimedia/img/franco.jpg";

function Footer() {
    return (
        <div>
            <footer>
                <p>Derechos Reservados ©️2023</p>
                <br />
                <div className="container">
                    <div className="cards">
                        <img src={walter} alt="Walter" />
                        <h4>Walter Coronel</h4>
                        <p>Programador Web Full Stack JR</p>
                        <div className="redes">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/walter--coronel/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/WalterCoronel2000" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={elian} alt="elian" />
                        <h4>Elian Amselem</h4>
                        <p>Programador Web Full Stack JR</p>
                        <div className="redes">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/elian-amselem/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/Elian-Amselem" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                        
                    </div>
                    <div className="cards">
                        <img src={franco} alt="franco" />
                        <h4>Franco Ruiz</h4>
                        <p>Programador Web Full Stack JR</p>
                        <div className="redes">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/franco-ruiz10/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/FrancoRuiz10" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                        
                    </div>
                    
                </div>
            </footer>
        </div>
    );
}

export default Footer;