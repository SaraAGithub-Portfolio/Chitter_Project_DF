import PeepCard from "./PeepCard.jsx";
import PropTypes from 'prop-types';

const PeepList = ({ dataObj }) => {

    const displayPeeps = () => {
        if (!dataObj || dataObj.length === 0) {
            return <tr><td>Peeps loading... </td></tr>
        } else {
            let peepList = dataObj.map(peep => {

                const actualPeep = peep.addPeep || peep;

                if (!actualPeep.name || typeof actualPeep.name !== 'string') {
                    console.warn("Invalid or missing name for peep:", actualPeep);
                    return null;
                }

                return (
                    <tr key={actualPeep._id}>
                        <td>
                            <PeepCard data={actualPeep} />
                        </td>
                    </tr>
                );
            }).filter(Boolean);
            return peepList.reverse();
        }
    }

    return (
        <>
            <table className="table">
                <tbody>
                    {displayPeeps()}
                </tbody>
            </table>
        </>
    );
}


PeepList.propTypes = {
    dataObj: PropTypes.array,
}

export default PeepList;
