import { Link, NavLink } from 'react-router-dom';
import Greeting from './greeting';
import logo from '../../images/Chitter Logo.png';

const Header = () => {
    return (
        <header>
            <Greeting />
            <nav className="navbar navbar-expand-sm">
                <img src={logo} alt="Chitter Logo" width="150" />
                <Link to="/" className="navbar-brand">Chitter</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <NavLink to="/auth/login" className="nav-link active">
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/auth/signup" className="nav-link active">
                                Signup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/post" className="nav-link active">
                                Add Peep
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
