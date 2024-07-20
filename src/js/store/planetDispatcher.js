const BACKEND_URL = "https://www.swapi.tech/api";
const PATH = "/planets";

export const PlanetDispatcher = {
    get: async () => {
        const response = await fetch(`${BACKEND_URL}${PATH}`);
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        return await response.json();
    }
};