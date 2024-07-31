import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const CharacterDetailsCard = () => {
  const { store } = useContext(Context);
  const { uid } = useParams();

  const character = store.characters.find((char) => char.uid === uid);

  if (!character) {
    return <p>Character not found</p>;
  }

  return (
    <div className="container d-flex justify-content-center m-auto">
      <div className="card" style={{ width: "50rem" }}>
        <div className="d-flex row row-cols-2 row-cols-md-2 row-cols-sm-1 mb-4">
          <div className="col" style={{ width: "25rem" }}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
              className="card-img-top mt-3 p-3"
              alt={`Image of ${character.name}`}
              onError={(e) => (e.target.src = "https://placehold.co/286x286")}
            />
          </div>
          <div className="card-body p-3 col" style={{ width: "25rem" }}>
            <h5 className="card-title text-center fs-1 p-1">
              {character.name}
            </h5>
            <p className="card-text text-center me-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="container text-center border-top border-danger p-3">
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">{character.name}</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Birth Year</h5>
                  <p className="card-text">{character.birth_year}</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Gender</h5>
                  <p className="card-text">{character.gender}</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Height</h5>
                  <p className="card-text">{character.height}</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Skin Color</h5>
                  <p className="card-text">{character.skin_color}</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Eye Color</h5>
                  <p className="card-text">{character.eye_color}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
