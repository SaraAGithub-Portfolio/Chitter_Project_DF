import PropTypes from 'prop-types';

const PeepCard = ({ peep }) => {
    const { name, username, message, dateCreated } = peep;


    return (
        <>
            <div className='peepCard'>
                <div className="card-header bg-primary text-white">
                    {name} @ {username}
                </div>
                <div className='card-body'>
                    <p className='text'>{message}</p>
                    <footer className='text-footer'>
                        <p>Added on {new Date(dateCreated).toLocaleString('en-GB')}</p>
                    </footer>
                </div>
            </div>
        </>
    );
};

PeepCard.propTypes = {
    peep: PropTypes.shape({
        name: PropTypes.string,
        username: PropTypes.string,
        message: PropTypes.string,
        dateCreated: PropTypes.string
    }).isRequired
};

export default PeepCard;
