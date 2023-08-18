import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddPeep from './components/Homepage/Peeps/AddPeep';
import Header from './components/Homepage/Header';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Homepage/Login/login';
import Signup from './components/Homepage/Signup/signup';
import { getPeepsData, addPeepData } from '../util/peepAPICall.js';
import { addUser } from '../util/userAPICall.js'
import { checkLogin } from '../util/authenticationHelper.js';


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
      console.log("Login details received:", loginDetails);
      const loggedInUser = await checkLogin(loginDetails);
      console.log("Logged In User:", loggedInUser);

      if (loggedInUser?.error) {
        setError(loggedInUser);
        return "Login failed!";
      }

      setUser(loggedInUser);
      console.log("User set in App state:", user);

      return "Login successful!";
    } catch (err) {
      console.error("Error during login:", err);
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

  const logOutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    getPeeps();
    const getCurrentUser = () => {
      return JSON.parse(localStorage.getItem("user"));
    };
    const user = getCurrentUser();
    if (user) {
      setUser(user);
    }
  }, []);



  return (
    <>

      <Header user={user} logOutUser={logOutUser} />
      <Routes>
        <Route
          path="/auth/login"
          element={user && user._id ? <Homepage user={user} setUser={setUser} peep={peepData} /> : <Login handleLogin={handleLogin} setUser={setUser} />}
        />
        <Route path="/auth/signup" element={<Signup newUser={newUser} />} />
        <Route path="/post" element={<AddPeep addPeep={addPeep} user={user} />} />
        <Route path="/" element={<Homepage user={user} setUser={setUser} peep={peepData} />} />
      </Routes>

    </>
  );
}

export default App;
