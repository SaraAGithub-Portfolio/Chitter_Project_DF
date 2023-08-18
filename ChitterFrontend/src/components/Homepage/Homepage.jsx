import PropTypes from 'prop-types';
import PeepList from "./Peeps/PeepList";

const Homepage = ({ peep }) => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Peep Feed</h1>
            <PeepList peep={peep} />
        </div>
    );
};

Homepage.propTypes = {
    peep: PropTypes.array,
};

export default Homepage;
