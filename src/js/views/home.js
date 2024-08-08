import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CharactersCard } from "./charactersCard";
import { PlanetsCard } from "./planetsCard";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCharacters();
    actions.getPlanets();
  }, []);

  return (
    <div className="container mt-5">
      <p className="fs-1 text-danger">Characters</p>
      <div className="overflow-auto d-flex">
        {store.characters.map((character, index) => (
          <div
            className="flex-shrink-0 me-3"
            key={index}
            style={{ width: "18rem" }}
          >
            <CharactersCard characters={character} />
          </div>
        ))}
      </div>
      <p className="fs-1 text-danger">Planets</p>
      <div className="overflow-auto d-flex">
        {store.planets.map((planet, index) => (
          <div
            className="flex-shrink-0 me-3"
            key={index}
            style={{ width: "18rem" }}
          >
            <PlanetsCard planets={planet} />
          </div>
        ))}
      </div>
    </div>
  );
};
