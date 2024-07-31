export const CharacterDetailsDispatcher = {
  get: async (uid) => {
    const PATH = `/people/${uid}`;
    const response = await fetch(`${process.env.BACKEND_URL}${PATH}`);
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    return await response.json();
  },
};
