import doctors from "../../doctors.json";
import videovisit from "../../icons/videovisit.svg";
import heart from "../../icons/heart.svg";

import "./Cards.css";
const {
  data: { items },
} = doctors;

const Photo = ({ doctor }) => (
  <div className="card-photo">
    {doctor.name
      .split(" ")
      .map((x) => x[0])
      .join("")}
    {doctor.telehealth && (
      <picture className="icon">
        <img src={videovisit} alt="videovisit" />
      </picture>
    )}
  </div>
);

const Cards = () => (
  <main className="cards-container">
    <ul>
      {items.map((doctor) => (
        <li key={doctor.id} className="card">
          <Photo doctor={doctor} />
          <div className="card-main-info">
            <h3 className="card-headline">{doctor.name}</h3>
            <div className="card-main-info-top">
              <div className="card-main-info-top-item">{doctor.speciality}</div>
              <div className="card-main-info-top-item">
                {doctor.experience} Years Experience
              </div>
              <div className="card-main-info-reviews">
                {doctor.reviewsCount} Reviews
              </div>
            </div>
            <div className="card-main-info-bottom">
              {doctor.telehealth && (
                <div className="card-main-info-bottom-item">Video visit</div>
              )}
              <div>{doctor.address}</div>
            </div>
          </div>
          <div className="card-secondary-info">
            <div className="avg-price">avg.price</div>
            <div className="price">${doctor.price}</div>
            <picture style={{ cursor: "pointer" }}>
              <img src={heart} alt="add to favorite" />
            </picture>
          </div>
        </li>
      ))}
    </ul>
  </main>
);

export default Cards;
