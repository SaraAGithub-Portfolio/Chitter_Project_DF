import PropTypes from 'prop-types';

const PeepCard = props => {

    const { data } = props;

    const { name, username, message, timestamp } = data

    return (
        <div className="card w-75 border-primary bg-light mb-3 container">
            <div className="card-header bg-primary text-white">
                {name} @ {username}
            </div>
            <div className="card-body  ">
                <blockquote className="blockquote mb-0 ">
                    <p className=" text-black">{message}</p>
                    <footer className="blockquote-footer  ">{timestamp}</footer>
                </blockquote>
            </div>
        </div>

    )
}
PeepCard.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        timestamp: PropTypes.string
    }).isRequired
};

export default PeepCard;
