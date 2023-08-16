import PropTypes from 'prop-types';
import PeepList from "./Peeps/PeepList";



const Homepage = ({ peep }) => {

    return (
        <>
            <PeepList peep={peep} />

        </>
    );
};
Homepage.propTypes = {
    peep: PropTypes.array,
};
export default Homepage;