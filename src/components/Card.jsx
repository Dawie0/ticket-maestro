/* eslint react/prop-types: 0 */
import './card.css'


const Card = ({ data }) => {
    return (
        <div className="col-5 card">
          <img src={data.image_url} alt={data.title} className="card-image" />
          <h3 className="card-title">{data.title}</h3>
        </div>
      );
}

export default Card