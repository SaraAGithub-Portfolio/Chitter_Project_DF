import PropTypes from 'prop-types';

const PeepDisplay = ({ peep }) => {
    const { peepUser, peepMessage, peepDateCreated } = peep;
    const date = new Date(peepDateCreated).toLocaleDateString('en-GB');
    return (
        <div className='peep-form-box'>
            <h3>User{peepUser}</h3>
            <h3>Peep:{peepMessage}</h3>
            <h3 className="date">{date}</h3>
        </div>
    );
}
PeepDisplay.propTypes = {
    peep: PropTypes.shape({
        peepUser: PropTypes.string,
        peepMessage: PropTypes.string,
        peepDateCreated: PropTypes.string
    }).isRequired
};
export default PeepDisplay;