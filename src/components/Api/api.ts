export const MEMORY = {
  getMemories: () => {
    return fetch('http://localhost:5000/api/locations/');
  },
};
