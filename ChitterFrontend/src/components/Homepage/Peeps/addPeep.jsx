import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AddPeep = props => {
    const navigate = useNavigate();
    const { addPeep, user } = props;
    const [peepText, setPeepText] = useState('');

    const createPeep = () => {
        if (localStorage.getItem("user")) {
            return <div className="col-md-12">
                <div className="card card-container text-center">
                    <form onSubmit={handleSubmit}  >
                        <div className=" text-start ">
                            <label htmlFor="createPeep" style={{ fontWeight: 'bold' }}>Release the peeps!</label>
                            <input
                                type="text"
                                className="form-control form-control-xxxl "
                                id="createPeep"
                                aria-describedby="write peep here"
                                placeholder="Write your peep here"
                                value={peepText}
                                onChange={event => setPeepText(event.target.value)} />
                        </div>
                        <br></br>
                        <button type="submit" className={`btn p-10 ${!peepText ? `btn-danger` : `btn-primary`}`} disabled={!peepText} data-toggle="button" aria-pressed="true" >Peep</button>
                    </form>
                </div></div>
        } else {
            return <h3 className=" text-center"> Sign up or log in to peep!</h3>
        }
    }
    const handleSubmit = event => {
        event.preventDefault();
        const peep = {
            "name": user.name,
            "username": user.username,
            "timestamp": dateCreated(),
            "message": peepText
        }
        addPeep(peep);
        setPeepText('');
        alert("Peep posted!")

        navigate('/');
    }

    const dateCreated = () => {
        const date = new Date()
        return `${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`
    }

    return (
        <>
            {createPeep()}
        </>
    )
}
AddPeep.propTypes = {
    addPeep: PropTypes.func.isRequired,
    user: PropTypes.object

}

export default AddPeep;