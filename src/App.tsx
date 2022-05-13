import { useEffect, useState } from 'react';
import { LOCATION } from './components/Api/api';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from 'components/NavigationBar/NavigationBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import { ILocation } from 'interfaces/interfaces';
import LocationDetails from 'components/LocationDetails/LocationDetails';
import Locations from 'components/Locations/Locations';

function App() {
  const [fetchData, setFetchData] = useState<ILocation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await LOCATION.getLocations();
        const data = await resp.json();
        setFetchData(data.locations);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home fetchData={fetchData} />} />
          <Route
            path='/locations'
            element={<Locations fetchData={fetchData} />}
          />
          <Route
            path='/location-details/:id'
            element={<LocationDetails fetchData={fetchData} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
