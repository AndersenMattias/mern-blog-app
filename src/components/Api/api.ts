export const LOCATION = {
  getLocations: () => {
    return fetch('http://localhost:5000/api/locations/');
  },
  deleteLocation: () => {
    return fetch('http://localhost:5000/api/locations/:id');
  },
};
