import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const PlanetsCard = ({ planets }) => {
  const { store, actions } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(store.favorites.some(fav => fav.uid === planets.uid));

  const addFavorite = () => {
    if (isFavorite) {
      // Remove from favorites if it's already selected
      actions.removeFavorite(planets.uid);
    } else {
      // Add to favorites if it's not selected
      actions.addFavorite(planets);
    }
    setIsFavorite(!isFavorite); // Toggle the state
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/286x286";
  };

  return (
    <div className="container m-3">
      {console.log(planets)}
      <div className="card d-flex" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`}
          className="card-img-top"
          alt="..."
          onError={handleImageError}
        />
        <div className="card-body">
          <h5 className="card-title">{planets.name}</h5>
          <p>
            Gender: {planets.gender} <br />
            Hair color: {planets.hair_color}
            <br />
            Eye color: {planets.eye_color}
          </p>
          <div className="card-footer text-body-secondary d-flex justify-content-between">
            <Link
              to={`/planetDetailsCard/${planets.uid}`}
              className="btn btn-primary"
            >
              Learn more!
            </Link>
            <i
              className={`fa-heart fs-1 ${isFavorite ? 'fa-solid' : 'fa-regular'}`} // Conditional class
              onClick={addFavorite}
              style={{ cursor: 'pointer' }} // Ensure the icon is clickable
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
