import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Signup = ({ newUser }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const navigate = useNavigate();

    const handleSignup = async event => {
        event.preventDefault();
        const peepUserDetails = {
            "username": username,
            "password": password,
            "email": email,
            "name": {
                "firstName": firstName,
                "lastName": lastName
            }
        };

        const response = await newUser(peepUserDetails);

        if (response && typeof response === "object" && !Array.isArray(response)) {
            setFormErrors(response);
        } else {
            alert(response);
            if (response === "Signup successful!") {
                setEmail('');
                setFirstName('');
                setLastName('');
                setUsername('');
                setPassword('');
                navigate("/");
            }
        }
    };

    return (
        <div className="col-md-10">
            <div className="signup container text-center">
                <form onSubmit={handleSignup}>
                    <div className="text-start row">
                        <div className="text-start col-4">
                            <label htmlFor="firstName">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="first name"
                                value={firstName}
                                onChange={event => setFirstName(event.target.value)}
                            />
                        </div>
                        <div className="text-start col-4">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="last name"
                                value={lastName}
                                onChange={event => setLastName(event.target.value)}
                            />
                        </div>

                        <div className="text-start col-4">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                            {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                        </div>

                        <div className="text-start col-4">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="type here..."
                                value={username}
                                onChange={event => setUsername(event.target.value)}
                            />
                            {formErrors.email && <span className="error-text">{formErrors.username}</span>}
                        </div>

                        <div className="text-start col-4">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="type here..."
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                            {formErrors.email && <span className="error-text">{formErrors.password}</span>}
                        </div>
                    </div>
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        data-toggle="button"
                        aria-pressed="true"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    )
}
Signup.propTypes = {
    newUser: PropTypes.func.isRequired,
}


export default Signup;