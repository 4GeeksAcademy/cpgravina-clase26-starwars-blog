import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CharactersCard } from "./charactersCard";
import { PlanetsCard } from "./planetsCard";
import { CharacterDetailsCard } from "./characterDetailsCard";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container mt-5">
      <p className="fs-1 text-danger">Characters</p>
      <div className="row">
        {store.characters.map((character, index) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
            <CharactersCard characters={character} />
          </div>
        ))}
      </div>
      <p className="fs-1 text-danger">Planets</p>
      <div className="row">
        {store.planets.map((planet, index) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
            <PlanetsCard planets={planet} />
          </div>
        ))}
      </div>
    </div>
    
  );
};
