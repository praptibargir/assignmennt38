import './card.css';

const Card = ({url,movieName, ticketCost, rating, duration}) => {
    return (
        <div className="card">
            <img src={url} alt="poster" className='poster-img' />
            <h1 class="heading">{movieName}</h1>
            <p class="cost">{ticketCost}</p>
            <div className='content'>
                <p class="text duration">Duration: {duration}</p>
                <p class="text rating">Rating: {rating}/10</p>
            </div>
        </div>
    )
}
export default Card;
