import React, { useEffect, useState } from 'react'
import PopularGames from '../PopularGames/PopularGames';
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer';

const Home = () => {
    const key = "key=245f832a08d8466ea2e21a8a0455bd8b";
    const API_URL = "https://api.rawg.io/api/";
    const [popularGames,setPopularGames] = useState();
    console.log(popularGames);

    const [index, setIndex] = useState(1)

    useEffect(() => {
        fetch(`${API_URL}games?${key}&page=${index}`)
        .then((response) => response.json())
        .then((data) => setPopularGames(data.results))
        .catch((err) => console.log(err))

    }, [index])

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
                popularGames ? popularGames.map((games) => <PopularGames key={games.id} {...games} />)
                : <p>Cargando...</p>
            }
            
        </main>
        <Pagination index={index} handlePrev={handlePrev} handleNext={handleNext}/>
        <Footer/>
    </>
)
}

export default Home;
