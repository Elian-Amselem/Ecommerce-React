import './PopularGames.css'

const PopularGames = ({name,background_image,rating_top,reviews_count,suggestions_count,metacritic}) => {

return (
    <div className="card">
        <div className="card_img">
            <img className="card_bg-image" src={background_image} alt={name} />
        </div>
        <div className="card_data">
            <h2>{name} <span className="card_meta-critic">{metacritic}</span></h2>
            <div className='card_data-extras'>
            <h4>⭐Rating: {rating_top}</h4>
            <p>💬{reviews_count}</p>
            </div>
        </div>
    </div>
)
}

export default PopularGames;
