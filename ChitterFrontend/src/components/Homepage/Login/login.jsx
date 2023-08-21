import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = props => {

    const { checkLogin } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async event => {
        event.preventDefault();
        const loginDetails = {
            "username": username,
            "password": password
        }
        const login = await checkLogin(loginDetails);
        setUsername('');
        setPassword('');
        if (localStorage.getItem("user")) {
            alert("Login Successful, Welcome to Chitter!");
            navigate("/");
        } else {
            console.dir(login);
        }
    }

    return (
        <div className="col-md-12">
            <div className="card card-container text-center">
                <form onSubmit={handleLogin}>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control form-control-xxxl"
                                id="username"
                                aria-describedby="username"
                                value={username}
                                onChange={event => setUsername(event.target.value)} />
                        </div>
                        <div className="col-6">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control form-control-xxxl"
                                id="password"
                                aria-describedby="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)} />
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn text-center btn-primary active p-10" data-toggle="button" aria-pressed="true">Login</button>
                </form>
            </div>
        </div>
    );
}

Login.propTypes = {
    checkLogin: PropTypes.func.isRequired
}

export default Login;
