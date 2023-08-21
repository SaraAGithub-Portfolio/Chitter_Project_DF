import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Homepage/Header';
import Footer from './components/Homepage/Footer';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Homepage/Login/login';
import Signup from './components/Homepage/Signup/signup';
import { getPeepDataAsync, sendPeepDataAsync } from '../util/peepAPICall.js';
import { checkLoginAsync, addUserAsync, logOut, getCurrentUser } from '../util/userAPICall';


function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [user, setUser] = useState(undefined)

  const addPeep = async (peep) => {
    const result = await sendPeepDataAsync(peep);
    if (result?.error) {
      setError(result);
      return "Peep could not be added";
    }
    setData([...data, result]);
    setError({});
  }

  const addUser = async (userDetails) => {
    const result = await addUserAsync(userDetails);
    if (result?.error) {
      setError(result);
      return "Signup failed";
    }
    setError({});
    return "Signup sucessful"
  }

  const checkLogin = async (loginDetails) => {
    const result = await checkLoginAsync(loginDetails);
    if (result?.error) {
      setError(result);
      return "User information incorrect";
    }
    setUser(result);
    setError({});
  }

  const getPeepData = async () => {
    const dataResult = await getPeepDataAsync();
    console.log("Data Result:", dataResult);

    if (dataResult?.error) {
      setError(dataResult);
      setData([]);
    } else {
      setData(dataResult.data);
      setError({});
    }
  }


  const logOutUser = () => {
    logOut()
    setUser(undefined)
  }

  useEffect(() => {
    getPeepData();
    const user = getCurrentUser();
    if (user) {
      setUser(user)
    }
  }, [])

  return (
    <>
      <div id="app" className="container-fluid ">

        <Header logOutUser={logOutUser} />
        <div className="container-fluid ">
          <Routes>
            <Route path="/" element={
              (!error || Object.keys(error).length === 0) ? <Homepage data={data} user={user} addPeep={addPeep} />
                : <><p>Error: Peeps cannot be found</p></>
            } />
            <Route path="/auth/login" element={
              (!error || Object.keys(error).length === 0) ? <Login checkLogin={checkLogin} />
                : <><p>There was an issue. Try again. If making an account, create a unique account</p></>
            } />
            <Route path="/auth/signup" element={
              (!error || Object.keys(error).length === 0) ? <Signup newUser={addUser} />
                : <><p>Try again</p></>
            } />
          </Routes>
        </div>
        <Footer />

      </div>
    </>
  );
}

export default App;






