import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const Login = props => {
    const { userLogin } = props
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = async event => {
        event.preventDefault();
        const loginDetails = {
            "username": username,
            "password": password
        }
        const login = await userLogin(loginDetails);
        setUsername('');
        setPassword('');
        if (localStorage.getItem("user")) {
            alert("Log in successful");
            navigate("/")
        } else {
            console.dir(login)
        }
    }
    return (
        <form onSubmit={handleLogin} >
            <label htmlFor="username">UserName</label>
            <input type="text" className="form-control" id="username" value={username} onChange={event => setUsername(event.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" id="password" value={password} onChange={event => setPassword(event.target.value)} />
            <button type="submit" className="btn text-center btn-primary" data-toggle="button">Log in</button>
        </form>
    );
};
Login.propTypes = {
    userLogin: PropTypes.string.isRequired
}
export default Login;