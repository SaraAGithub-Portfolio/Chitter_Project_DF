import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ handleLogin, setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        const user = { email, password };

        const response = await handleLogin(user);

        if (response === "Login successful") {
            alert("Login successful!");
            navigate("/")
        } else {
            alert("Login failed!")
        }

        setEmail('');
        setPassword('');
        setUser(user);
        navigate('/');
    }

    return (
        <>
            <h3 className="login-title">Log in to your account</h3>
            <form onSubmit={login}>
                <input
                    type="email"
                    id="sign-in-email"
                    className="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                />
                <br />
                <input
                    type="password"
                    id="sign-in-password"
                    className="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                />
                <br />
                <input type="submit" value="Login" />
            </form>
            <Link to="/auth/signup">
                You don&apos;t have an account? Sign up now!
            </Link>
        </>
    );
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired
}

export default Login;
