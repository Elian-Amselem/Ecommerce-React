import walter from "../../assets/multimedia/img/walter.jpg";
import elian from "../../assets/multimedia/img/elian.jpg";
import franco from "../../assets/multimedia/img/franco.jpg";
import jordi from "../../assets/multimedia/img/jordi.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const CardsData = [
    {
      img: walter,
      title: "Walter Coronel",
      subtitulo: "Programador Web Full Stack JR",
      social: (
        <div>
          <a href="https://www.linkedin.com/in/walter--coronel/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/WalterCoronel2000" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      ),

},

{
    img: elian,
    title: "Elian Amselem",
    subtitulo: "Programador Web Full Stack JR",
    social: (
        <div>
          <a href="https://www.linkedin.com/in/elian-amselem/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Elian-Amselem" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      ),
    

},
{
    img: franco,
    title: "Franco Ruiz",
    subtitulo: "Programador Web Full Stack JR",
        social: (
        <div>
          <a href="https://www.linkedin.com/in/franco-ruiz10/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/FrancoRuiz10" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      ),
},
{
    img: jordi,
    title: "Jordi Maldonado",
    subtitulo: "Programador Web Full Stack JR",
    social: (
        <div>
          <a href="https://www.linkedin.com/in/jordi-michel-maldonado-aquino-a18a28163/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/JordiMalAq" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      ),
}


]

export default CardsData;