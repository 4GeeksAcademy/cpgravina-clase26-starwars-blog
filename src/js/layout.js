import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { CharactersCard } from "./views/charactersCard";
import { CharacterDetailsCard } from "./views/characterDetailsCard";
import { PlanetsCard } from "./views/planetsCard";
import { PlanetDetailsCard } from "./views/planetDetailsCard";

import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/charactersCard" element={<CharactersCard />} />
            <Route
              path="/characterDetailsCard/:uid"
              element={<CharacterDetailsCard camille={"Este es mi nombre"} />}
            />
            <Route
              path="/planetDetailsCard/:uid"
              element={<PlanetDetailsCard />}
            />
            <Route path="/planetsCard" element={<PlanetsCard />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
