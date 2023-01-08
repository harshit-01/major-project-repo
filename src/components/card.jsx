

export default function Card(props) {

    return (
        <div class="cardContainer">
          <div class="cardHead">
            <img class="cardImage" src={props.img} alt="Profile Pic" />
          </div>

          <div class="cardBody">
            <p class="cardName">{props.name}</p>
            <p class="cardTitle">
              {props.title}
            </p>
            <i class="bi bi-house"></i>
            <p class="cardAddress">
              {props.add}
            </p>
            {props.social && 
            <a href={props.social}><i className="bi bi-linkedin"></i></a>}
          </div>
        </div>
    )
}