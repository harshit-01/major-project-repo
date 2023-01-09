export default function Card(props) {
  return (
    <div className='cardContainer'>
      <div className='cardHead'>
        <img className='cardImage' src={props.img} alt='Profile Pic' />
      </div>

      <div className='cardBody'>
        <p className='cardName'>{props.name}</p>
        <p className='cardTitle'>{props.title}</p>
        <i className='bi bi-house'></i>
        <p className='cardAddress'>{props.add}</p>
        {props.social && (
          <a href={props.social}>
            <i className='bi bi-linkedin'></i>
          </a>
        )}
      </div>
    </div>
  );
}
