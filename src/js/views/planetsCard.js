import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const PlanetsCard = ({ planets }) => {
  const { store, actions } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(store.favorites.some(fav => fav.uid === planets.uid));

  const addFavorite = () => {
    if (isFavorite) {
      actions.removeFavorite(planets.uid);
    } else {
      actions.addFavorite(planets);
    }
    setIsFavorite(!isFavorite); 
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
            Population: {planets.population} <br />
            Terrain: {planets.terrain}
            <br />
          </p>
          <div className="card-footer text-body-secondary d-flex justify-content-between">
            <Link
              to={`/planetDetailsCard/${planets.uid}`}
              className="btn btn-primary"
            >
              Learn more!
            </Link>
            <i
              className={`fa-heart fs-1 ${isFavorite ? 'fa-solid' : 'fa-regular'}`} 
              onClick={addFavorite}
              style={{ cursor: 'pointer' }} 
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
