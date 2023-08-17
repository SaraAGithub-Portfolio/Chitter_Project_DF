import PeepCard from "./PeepCard.jsx";
import PropTypes from 'prop-types';

const PeepList = ({ peep }) => {


    const peepInfo = peep.map(peepData => (
        <div key={peepData._id} className="card mb-4">
            <div className="card-body">
                <PeepCard peep={peepData} />
            </div>
        </div>
    ));

    return (
        <div className="peep-container">
            <h2>Today&apos;s Peeps</h2>
            {peep.length > 0 ? peepInfo : <div>Peeps are loading...</div>}
        </div>
    );
};
PeepList.propTypes = {
    peep: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
        })
    ).isRequired
};


export default PeepList;
