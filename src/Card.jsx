import './Card.css'
function Card(props){
    return(
        <>
        <div class="card">
        <img src="https://via.placeholder.com/150" alt="Card Image" class="card-image" />
        <div class="card-content">
            <h2 class="card-title">{props.title}</h2>
            <p class="card-description">This is a brief description of the card. It provides some information about the content inside the card.</p>
            <a href="#" class="card-button">Read More</a>
        </div>
    </div>
        </>
    )
}

export default Card
