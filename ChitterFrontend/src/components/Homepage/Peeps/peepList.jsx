import PeepCard from "./PeepCard.jsx";
import PropTypes from 'prop-types';

const PeepList = ({ peep }) => {
    const latestPeeps = Array.from(peep).reverse();

    const peepInfo = latestPeeps.map(peepData => (
        <div key={peepData.peepDateCreated} className="card mb-4">
            <div className="card-body">
                <PeepCard peep={peepData} />
            </div>
        </div>
    ));
    return (
        <div className="peep-container">
            {latestPeeps.length > 0 ? peepInfo : <div>Peeps are loading...</div>}
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
