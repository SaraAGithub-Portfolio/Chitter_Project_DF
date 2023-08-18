import './Styles/AddPeep.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const AddPeep = ({ addPeep, user }) => {

    const [peepDetails, setPeepDetails] = useState({
        username: '',
        message: '',
        date: new Date().toLocaleDateString()
    });
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setPeepDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            alert("You need to log in before peeping!");
            navigate("/")
            return;
        }
        console.log("User prop in AddPeep:", user);

        const newPeep = {
            username: user.username,
            message: peepDetails.message,
            date: new Date().toLocaleDateString()
        };

        console.dir(newPeep);

        try {
            await addPeep(newPeep);
            setPeepDetails(prev => ({ ...prev, message: '' }));
            navigate("/");
        } catch (err) {
            console.error("Error posting peep:", err);
        }
    };

    return (
        <div className="container">
            <h1>Post your peep</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="peep-input-wrapper">
                    <label className="col-sm-2 col-form-label" htmlFor="message">
                        Peep
                        <div className="peep-input-card">
                            <input type="text" className="form-control" name="message" id="message" placeholder="Type here..." value={peepDetails.message} onChange={e => handleChange(e)} />
                        </div>
                    </label>
                </div>
                <div className="peep-input-wrapper">
                    <label className="col-sm-2 col-form-label" htmlFor="date">
                        Date
                        <div className="peep-input-card">
                            <input type="text" className="form-control" name="date" id="date" value={peepDetails.date} onChange={e => handleChange(e)} />
                        </div>
                    </label>
                </div>
                <input type="submit" className="btn btn-primary" value="Add Peep" />
            </form>
        </div>
    );

};
AddPeep.propTypes = {
    addPeep: PropTypes.func.isRequired,
    user: PropTypes.object
}

export default AddPeep;