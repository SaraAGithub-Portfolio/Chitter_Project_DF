import { useState, useEffect } from 'react'
import AddPeep from './components/Homepage/Peeps/addPeep';
// import PeepCard from './components/Homepage/Peeps/peepCard';
import PeepList from './components/Homepage/Peeps/peepList';
import { getPeepsData } from '../util/dataServiceCall';
import './App.css'

function App() {
  const [peeps, setPeeps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPeepsData();
      setPeeps(data);
    };
    fetchData();
  }, []);
  const addNewPeep = (newPeep) => {
    setPeeps(prevPeeps => [newPeep, ...prevPeeps]);
  };
  return (
    <>
      <div className="App">
        <AddPeep addNewPeep={addNewPeep} />
        <PeepList peep={peeps} />
      </div>
    </>
  )
}

export default App;
