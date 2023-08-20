import PropTypes from 'prop-types';
import PeepList from "./Peeps/PeepList";
import AddPeep from './Peeps/AddPeep';

const Homepage = props => {
    const { data, addPeep, user } = props
    return (
        <>
            <AddPeep addPeep={addPeep} user={user} />
            <PeepList dataObj={data} />
        </>
    )
}
Homepage.propTypes = {
    data: PropTypes.array.isRequired,
    addPeep: PropTypes.func,
    user: PropTypes.object,
};


export default Homepage
