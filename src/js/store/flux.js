import { CharacterDispatcher } from "./characterDispatcher";
import { CharacterDetailsDispatcher } from "./characterDetailsDispatcher";
import { PlanetDispatcher } from "./planetDispatcher";
import { PlanetDetailsDispatcher } from "./planetDetailsDispatcher";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [], 
      planets: [],
      favorites: [],
    },

    actions: {
      getCharacters: async () => {
        try {
          const store = getStore();
          const data = await CharacterDispatcher.get();
          const characterPromises = data.results.map(async (character) => {
            return await getActions().getCharactersDetail(character.uid);
          });

          const charactersDetails = await Promise.all(characterPromises);
          console.log("Fetched characters details:", charactersDetails);

          setStore({ characters: charactersDetails });
        } catch (error) {
          console.log("The characters have not been found", error);
        }
      },

      getCharactersDetail: async (uid) => {
        try {
          const store = getStore();
          const data = await CharacterDetailsDispatcher.get(uid);

          return {
            description: data.result.description,
            uid: data.result.uid,
            ...data.result.properties,
          };
        } catch (error) {
          console.log("The character details have not been found", error);
          return null;
        }
      },

      getPlanets: async () => {
        try {
          const store = getStore();
          const data = await PlanetDispatcher.get();
          const planetPromises = data.results.map(async (planet) => {
            return await getActions().getPlanetsDetail(planet.uid);
          });

          const planetsDetails = await Promise.all(planetPromises);
          console.log("Fetched planets details:", planetsDetails);

          setStore({ planets: planetsDetails });
        } catch (error) {
          console.log("The planets have not been found", error);
        }
      },

      getPlanetsDetail: async (uid) => {
        try {
          const store = getStore();
          const data = await PlanetDetailsDispatcher.get(uid);

          return {
            description: data.result.description,
            uid: data.result.uid,
            ...data.result.properties,
          };
        } catch (error) {
          console.log("The character details have not been found", error);
          return null;
        }
      },

      
      addFavorite: (item) => {
        const store = getStore();
        setStore({
          ...store,
          favorites: [...store.favorites, item]
        });
      },

      removeFavorite: (uid) => {
        const store = getStore();
        setStore({
          ...store,
          favorites: store.favorites.filter(fav => fav.uid !== uid)
        });
      }
    },
  };
};

export default getState;
