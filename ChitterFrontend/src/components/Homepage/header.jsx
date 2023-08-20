import logo from '../../images/Chitter Logo.png';
import { Link } from 'react-router-dom';
import Greeting from './greeting';
import PropTypes from 'prop-types';
import './Header.css'

const Header = props => {
    const { logOutUser } = props;

    return (
        <>


            <nav className="navbar navbar-expand-sm navbar bg-primary">
                <div className="container">
                    <Greeting />
                    <Link to="/" className="navbar-brand nb-0 h1">
                        <img src={logo} alt="Chitter logo" width="350" className="d-inline-block" />
                        <h1 className="d-inline-block text-primary">Chitter</h1>
                    </Link>

                    <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-target="#navbarNav"
                        className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {localStorage.getItem("user") ?
                                <li className="nav-item">
                                    <a href="/auth/login" className="nav-link active" onClick={logOutUser}>Logout</a>
                                </li> :
                                <>
                                    <li className="nav-item active">
                                        <Link to="/auth/login" className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link to="/auth/signup" className="nav-link">Sign up</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
Header.propTypes = {
    logOutUser: PropTypes.func.isRequired
}
export default Header;
