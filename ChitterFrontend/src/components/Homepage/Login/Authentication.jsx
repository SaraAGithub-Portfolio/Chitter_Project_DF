import PropTypes from 'prop-types';
import Login from './login';

const Authentication = ({ handleLogin }) => {
    return (
        <div className="row">
            <div className="col-lg-6 offset-3">
                <h3>Login</h3>
                <p>You must be logged in to use this app</p>
                <Login handleLogin={handleLogin} />
            </div>
        </div>
    )
}
Authentication.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool
}
export default Authentication;