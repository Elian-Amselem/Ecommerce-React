import './PopularGames.css'

const PopularGames = ({nombre,imagen,descripcion,lanzamiento,plataformas}) => {

return (
    <div className="card">
        <div className="card_img">
            <img className="card_bg-image" src={imagen} alt={nombre} />
        </div>
        <div className="card_data">
            <h2>{nombre} <span className="card_meta-critic">{lanzamiento}</span></h2>
            <div className='card_data-extras'>
            <p>💬{descripcion}</p>
            </div>
            <h4>🎮Plataformas: {plataformas.map((platform) =>{
                return(<li key={platform}>{platform}</li>)
            })} </h4>
        </div>
    </div>
)
}

export default PopularGames;
