import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPeep from './components/Homepage/Peeps/AddPeep';
import Header from './components/Homepage/header';
import Homepage from './components/Homepage/home';
// import Login from './components/Homepage/Login/login';
import { getPeepsData, addPeepData } from '../util/peepAPICall.js';


function App() {
  const [peepData, setPeepData] = useState([]);
  const [user, setUser] = useState({ name: '', username: '' });
  const [error, setError] = useState({}) // Comment this if you're not using it yet

  const getPeeps = async () => {
    const peep = await getPeepsData();

    if (peep?.error) {
      setError(peep);
      setPeepData([]);
    } else {
      setPeepData(peep);
      setError({});
    }
  };


  const newPeepData = async (peep) => {
    const result = await addPeepData(peep);

    if (result?.error) {
      setError(result);
      return "Could not peep. Try again";
    } else {
      setPeepData(prev => [...prev, result]);
      setError({});
    }
  }



  useEffect(() => {
    getPeeps();
  }, []);


  return (
    <>

      <Header user={user} userLogout={() => setUser({})} />  {/* Always display Header */}
      <Routes>
        {/* <Route path="/login" element={<Login setUser={setUser} />} /> */}
        <Route path="/post" element={<AddPeep addPeep={newPeepData} />} />
        <Route path="/" element={<Homepage user={user} peep={peepData} setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;
