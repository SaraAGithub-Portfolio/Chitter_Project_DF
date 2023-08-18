import { Link } from "react-router-dom";
import './HeaderStyle.css';
import PropTypes from 'prop-types';
import Greeting from './greeting';
import logo from '../../images/Chitter Logo.png'


const Header = props => {
    const { logOutUser, user } = props;

    return (
        <nav className="navbar navbar-expand-sm navbar-light twitter-blue">
            <img src={logo} alt="Chitter Logo" width="250" className="my-auto" />
            <Greeting />

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    {user ? (
                        <li className="nav-item">
                            <Link to="/auth/login" className="nav-link active" onClick={logOutUser}>Logout</Link>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item active">
                                <Link to="/auth/login" className="nav-link active">Login</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/auth/signup" className="nav-link active">Signup</Link>
                            </li>
                        </>
                    )}
                    <li>
                        <Link to="/post" className="nav-link active">
                            Add Peep
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

Header.propTypes = {
    logOutUser: PropTypes.func.isRequired,
    user: PropTypes.object
};

export default Header;
