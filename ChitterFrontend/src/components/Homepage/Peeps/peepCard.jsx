import PropTypes from 'prop-types';

const PeepCard = ({ peep }) => {
    const { peepUser, peepMessage, peepDateCreated } = peep;

    return (
        <>
            <div className='peepCard'>
                <div className='card-header'>{peepUser}</div>
                <div className='card-body'>
                    <p className='text'>{peepMessage}</p>
                    <footer className='text-footer'>
                        <p>Added on {new Date(peepDateCreated).toLocaleString('en-GB')}</p>
                    </footer>
                </div>
            </div>
        </>
    );
};

PeepCard.propTypes = {
    peep: PropTypes.shape({
        peepUser: PropTypes.string,
        peepMessage: PropTypes.string,
        peepDateCreated: PropTypes.string
    }).isRequired
};

export default PeepCard;
