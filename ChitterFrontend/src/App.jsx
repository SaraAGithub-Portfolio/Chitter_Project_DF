import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPeep from './components/Homepage/Peeps/AddPeep';
import Header from './components/Homepage/header';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Homepage/Login/login';
import Signup from './components/Homepage/Signup/signup';
import { getPeepsData, addPeepData } from '../util/peepAPICall.js';
import { addUser } from '../util/userAPICall.js'
import { checkLogin } from '../util/authenticationHelper';


function App() {
  const [peepData, setPeepData] = useState([]);
  const [user, setUser] = useState({});
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


  const addPeep = async (peep) => {
    const result = await addPeepData(peep);

    if (result?.error) {
      setError(result);
      return "Could not peep. Try again";
    } else {
      setPeepData(prev => [...prev, result]);
      setError({});
    }
  }

  const handleLogin = async (loginDetails) => {
    try {
      const loggedInUser = await checkLogin(loginDetails);
      if (loggedInUser?.error) {
        setError(loggedInUser);
        return "Login failed!";
      }
      setUser(loggedInUser);
      return "Login successful!";
    } catch (err) {
      setError({
        message: "An error occurred during login."
      });
      return "Login failed!";
    }
  };
  const newUser = async (userDetails) => {
    try {
      const result = await addUser(userDetails);

      if (result?.errors) {
        setError(result);
        return result.errors;
      } else if (result?.error) {
        setError(result);
        return "Signup failed!";
      }

      setUser(result);
      return "Signup successful!";
    } catch (err) {
      setError({
        message: "An error occurred during signup."
      });
      return "Signup failed!";
    }
  };


  // const handleLogout = async () => {
  //   try {
  //     const result = await userLogout();
  //     if (result?.error) {
  //       setError(result);
  //       return "Logout failed!";
  //     }
  //     // Clear user data upon logout
  //     setUser({ name: '', username: '' });
  //     return "Logout successful!";
  //   } catch (err) {
  //     setError({
  //       message: "An error occurred during logout."
  //     });
  //     return "Logout failed!";
  //   }
  // };


  useEffect(() => {
    getPeeps();
  }, []);


  return (
    <>

      <Header />
      <Routes>
        <Route path="/auth/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/auth/signup" element={<Signup newUser={newUser} />} />
        <Route path="/post" element={<AddPeep addPeep={addPeep} />} />
        <Route path="/" element={<Homepage user={user} peep={peepData} />} />
      </Routes>

    </>
  );
}

export default App;
