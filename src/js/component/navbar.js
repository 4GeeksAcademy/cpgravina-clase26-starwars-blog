import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starwarsImage from "../../img/starwars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const removeFavorite = (uid) => {
    actions.removeFavorite(uid); // Assuming removeFavorite is defined in actions
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <a className="navbar-brand ms-3" href="#">
        <Link to="/" className="navbar-brand ms-3">
          <img
            src={starwarsImage}
            alt="Logo"
            className="img-fluid d-inline-block align-text-top"
            style={{ maxWidth: "100px" }}
          />
        </Link>
      </a>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle btn-lg"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <span className="badge bg-dark">{store.favorites.length}</span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {store.favorites.length === 0 ? (
              <li className="dropdown-item">
                No favorites available
              </li>
            ) : (
              store.favorites.map((favorite) => (
                <li key={favorite.uid} className="d-flex justify-content-between align-items-center">
                  <Link to={`/characterDetailsCard/${favorite.uid}`} className="dropdown-item">
                    {favorite.name}
                  </Link>
                  <i
                    className="fa-solid fa-trash-can text-danger"
                    onClick={() => removeFavorite(favorite.uid)}
                    style={{ cursor: 'pointer' }}
                    title="Remove from favorites"
                  ></i>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};



