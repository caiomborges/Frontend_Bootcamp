import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { updateUser } from '../app/UserSlice';
import '../styles/UpdateUser.css';

const UpdateUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [user, setUser] = useState({
        name: "",
        phoneNumber: "",
        password: ""
    });

    const handleUpdate = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateUser({email: location.state.email, user}));
        navigate("/home");
    };

    return (
        <>
            <h1>Update user</h1>

            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">
                    <span>Name</span>
                    <input
                    type="text"
                    name="name"
                    onChange={handleUpdate}
                    value={user.name}
                    />
                </label>
                </div>
                <div>
                <label htmlFor="phoneNumber">
                    <span>Phone</span>
                    <input
                    type="text"
                    name="phoneNumber"
                    onChange={handleUpdate}
                    value={user.phoneNumber}
                    />
                </label>
                </div>
                <div>
                <label htmlFor="password">
                    <span>Password</span>
                    <input
                    type="password"
                    name="password"
                    onChange={handleUpdate}
                    value={user.password}
                    />
                </label>
                </div>

                <button type="submit">Update</button>
            </form>

            <Link to="/home">Go Back</Link>
        </>
    )
}

export default UpdateUser;