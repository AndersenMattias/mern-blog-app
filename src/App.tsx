import { useEffect, useState } from 'react';
import { MEMORY } from './components/Api/api';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from 'components/NavigationBar/NavigationBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/Home/Home';
import { ILocationProps } from 'interfaces/interfaces';

function App() {
  const [fetchData, setFetchData] = useState<ILocationProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await MEMORY.getMemories();
        const data = await resp.json();
        setFetchData(data.memories);
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
          <Route path='/' element={<Home fetchData={fetchData} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
