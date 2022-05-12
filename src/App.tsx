import { useEffect, useState } from 'react';
import { MEMORY } from './components/Api/api';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from 'components/NavigationBar/NavigationBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/Home/Home';
import { ILocation } from 'interfaces/interfaces';
import LocationDetails from 'components/LocationDetails/LocationDetails';

function App() {
  const [fetchData, setFetchData] = useState<ILocation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await MEMORY.getMemories();
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
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home fetchData={fetchData} />} />
          <Route path='/location-details/:id' element={<LocationDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
