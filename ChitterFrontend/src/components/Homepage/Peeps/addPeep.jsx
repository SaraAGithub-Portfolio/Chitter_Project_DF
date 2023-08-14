import { useState } from 'react';
import PropTypes from 'prop-types';
import { addPeepData } from '../../../../util/peepAPICall.js';

const AddPeep = ({ user }) => {
    const [peep, setPeep] = useState({
        peepMessage: ''
    });

    const handleChange = (e) => {
        setPeep({ ...peep, peepMessage: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPeep = {
            username: user.username,
            peepMessage: peep.peepMessage,
            date: dateCreated()
        };

        const response = await addPeepData(newPeep);
        if (response && !response.error) {
            setPeep({ peepMessage: '' });
            alert('Peep added successfully!');
        } else if (response && response.error.message) {
            alert(`Error: ${response.error.message}`);
        }
    };

    const dateCreated = () => {
        const date = new Date();
        return `${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`;
    };

    return (
        <div className="container">
            {user ? (
                <>
                    <h2>What do you want to say? Peep it!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="addPeep">Peep:</label>
                            <input type="text" id="addPeep" name="peepText" className="form-control" value={peep.peepMessage} onChange={handleChange} placeholder="Type here..." />
                        </div>
                        <button type="submit" className="btn btn-primary">Peep it!</button>
                    </form>
                </>
            ) : (
                <p>Please log in to post a peep.</p>
            )}
        </div>
    );
};

AddPeep.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired
    }).isRequired
};

export default AddPeep;
