import './Home.css'
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer';
import PopularGames from '../PopularGames/PopularGames';
import Carousel from 'react-bootstrap/Carousel';
// import CSGO from "../../assets/multimedia/img/CSGO"




const Home = () => {

    const API_URL = "http://localhost:8081/juegos";
    const [popularGames, setPopularGames] = useState();
    console.log(popularGames);

    const [index, setIndex] = useState(1)
    useEffect(() => {
        fetch(`${API_URL}`)
            .then((response) => response.json())
            .then((data) => setPopularGames(data.juegos))
            .catch((err) => console.log(err));
    }, [index]);

    const handlePrev = () => {
        setIndex(prevValue => prevValue - 1)
    }

    const handleNext = () => {
        setIndex(prevValue => prevValue + 1)
    }

    return (
        <>

<div className='borderCarousel'>
<Carousel>
  <Carousel.Item>
  <img src="img/carrousel/imagen1.jpg" alt="Imagen1" />
  </Carousel.Item>
  <Carousel.Item>
  <img src="img/carrousel/imagen2.jpg" alt="Imagen2" />
  </Carousel.Item>
  <Carousel.Item>
  <img src="img/carrousel/imagen3.jpg" alt="Imagen3" />
  </Carousel.Item>
  <Carousel.Item>
  <img src="img/carrousel/imagen4.jpg" alt="Imagen4" />
  </Carousel.Item>
</Carousel>
</div>

            <main>

                {
                    popularGames ? popularGames.map((games) => <PopularGames key={games._id} {...games} />)
                        : <div className="glitch-wrapper">
                            <div className="glitch" data-glitch="Loading">Loading...</div>
                        </div>
                }

            </main>
            <Pagination index={index} handlePrev={handlePrev} handleNext={handleNext} />
            <Footer />
        </>
    )
}

export default Home;
