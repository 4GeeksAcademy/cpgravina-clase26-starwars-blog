const BACKEND_URL = "https://www.swapi.tech/api";
const PATH = "/people";

export const CharacterDispatcher = {
    get: async () => {
        const response = await fetch(`${process.env.BACKEND_URL}${PATH}`);
        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }
        return await response.json();
    }
};