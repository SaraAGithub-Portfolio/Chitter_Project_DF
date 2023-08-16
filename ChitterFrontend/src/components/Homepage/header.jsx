import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//add logo

const Header = props => {
    const { userLogout, user } = props;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-info">
            {/* Uncomment the below when you have the logo set up */}
            {/* 
            <div className="container">
                <a href="/" className="navbar-brand mb-0 h1 container">
                    <img src={logo} className="d-inline-block" alt="Chitter logo" width="90" />
                    <h1 className="d-inline-block container text-center">Chitter</h1>
                </a>
            </div> 
            */}
            <ul className='navbar-nav mr-auto'>
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Homepage</Link>
                </li>
                <li className="nav-item">
                    <Link to="/post" className="nav-link active">Add Peep</Link>
                </li>
                <li className="nav-item">
                    {
                        user ? (
                            <a href="/auth/logout" className="nav-link active" onClick={userLogout}>Logout</a>
                        ) : (
                            <Link to="/auth/login" className="nav-link active">Login</Link>
                        )
                    }
                </li>
            </ul>
        </nav>
    );
};

Header.propTypes = {
    userLogout: PropTypes.func.isRequired,
    user: PropTypes.object
};

export default Header;
