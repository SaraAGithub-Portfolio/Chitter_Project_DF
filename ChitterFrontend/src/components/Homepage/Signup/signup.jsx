import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Signup = props => {

    const { newUser } = props
    const [email, setEmail] = useState(``);
    const [name, setName] = useState(``);
    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);
    const navigate = useNavigate()

    const handleSignup = async event => {
        event.preventDefault();
        const userDetails = {
            'username': username,
            'password': password,
            'email': email,
            'name': name,
        }
        const newUserAdded = await newUser(userDetails);
        setEmail('');
        setName('');
        setUsername('');
        setPassword('');
        alert(newUserAdded)
        navigate("/auth/login");
    }

    return (
        <div className="col-lg-12 mx-auto">
            <div className="card card-container text-center">
                <form onSubmit={handleSignup}  >
                    <div className=" text-start row ">
                        <div className=" text-start col-6">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control form-control-xxxl "
                                id="name"
                                aria-describedby="name"
                                value={name}
                                onChange={event => setName(event.target.value)} />
                        </div>
                        <div className=" text-start col-6">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control form-control-xxxxl "
                                id="email"
                                aria-describedby="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)} />
                        </div>
                    </div>
                    <div className=" text-start row ">
                        <div className=" text-start col-6">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control form-control-xxxl "
                                id="username"
                                aria-describedby="username"
                                value={username}
                                onChange={event => setUsername(event.target.value)} />
                        </div>
                        <div className=" text-start col-6">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control form-control-xxxl "
                                id="password"
                                aria-describedby="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)} />
                        </div>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary active p-10" data-toggle="button" aria-pressed="true" >Signup</button>

                </form>
            </div></div>
    )
}
Signup.propTypes = {
    newUser: PropTypes.func,
}


export default Signup;