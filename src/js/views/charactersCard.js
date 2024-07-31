import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const CharactersCard = ({ characters }) => {
  const { store, actions } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(
    store.favorites.some((fav) => fav.uid === characters.uid)
  );

  const addFavorite = () => {
    if (isFavorite) {
      actions.removeFavorite(characters.uid);
    } else {
      actions.addFavorite(characters);
    }
    setIsFavorite(!isFavorite);
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/286x286";
  };

  return (
    <div className="container m-3">
      {console.log(characters)}
      <div className="card d-flex" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${characters.uid}.jpg`}
          className="card-img-top"
          alt="..."
          onError={handleImageError}
        />
        <div className="card-body">
          <h5 className="card-title">{characters.name}</h5>
          <p>
            Gender: {characters.gender} <br />
            Hair color: {characters.hair_color}
            <br />
            Eye color: {characters.eye_color}
          </p>
          <div className="card-footer text-body-secondary d-flex justify-content-between">
            <Link
              to={`/characterDetailsCard/${characters.uid}`}
              className="btn btn-primary"
            >
              Learn more!
            </Link>
            <i
              className={`fa-heart fs-1 ${
                isFavorite ? "fa-solid" : "fa-regular"
              }`}
              onClick={addFavorite}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
