import './PopularGames.css'

const PopularGames = ({name,background_image,rating_top,released,reviews_count,suggestions_count,metacritic}) => {

return (
    <div className="card">
        <div className="card_img">
            <img className="card_bg-image" src={background_image} alt={name} />
        </div>
        <div className="card_data">
            <h2>{name}</h2>
            <h3>⭐Rating: {rating_top}</h3>
            <p>💬Reviews count: {reviews_count}</p>
            <p>Released: {released}</p>
            <p>🔥Suggestions Count:{suggestions_count}</p>
            <p>Metacritic: {metacritic}</p>
        </div>
    </div>
)
}

export default PopularGames;
