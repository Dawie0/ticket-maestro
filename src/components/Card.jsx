/* eslint react/prop-types: 0 */
import './card.css'


const Card = ({ data }) => {

  const url = data.url

  const handleClicked = () => {
    window.open(url, '_blank')
  }
  
    return (
        <div className="col-5 card" onClick={handleClicked}>
          <img src={data.images[0].url} alt={data.title} className="card-image" />
          <h3 className="card-title">{data.name}</h3>
          <p>{data.priceRanges ? `Starting from ${data.priceRanges[0].currency} ${data.priceRanges[0].min}`: '$TBD'}</p>
          <p>{data.dates.start.localDate}</p>
          <p>{data._embedded?.venues ? `${data._embedded.venues[0]?.name}` : ''}</p>
        </div>
      );
}

export default Card