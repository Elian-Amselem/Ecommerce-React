import './Home.css'
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer';
import PopularGames from '../PopularGames/PopularGames';
const Home = () => {
    const API_URL = "http://localhost:8081/juegos";
    const [popularGames,setPopularGames] = useState();
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
        <main>
            
            {
                popularGames ? popularGames.map((games) => <PopularGames key={games._id} {...games} />)
                :   <div className="glitch-wrapper">
                        <div className="glitch" data-glitch="Loading">Loading...</div>
                    </div>
            }
            
        </main>
        <Pagination index={index} handlePrev={handlePrev} handleNext={handleNext}/>
        <Footer/>
    </>
)
}

export default Home;
