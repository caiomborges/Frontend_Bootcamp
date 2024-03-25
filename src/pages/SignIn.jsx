import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../app/UserSlice";
import '../styles/SigIn.css';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: ""
    });

    const handleUpdate = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createUser(user));
        navigate("/login");
    };
    
    return (
        <>
            <h1>Sign In</h1>

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
                <label htmlFor="email">
                    <span>Email</span>
                    <input
                    type="email"
                    name="email"
                    onChange={handleUpdate}
                    value={user.email}
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
                <button type="submit">Register</button>
            </form>

            <Link to="/login">Login</Link>
        </>
    )
}

export default SignIn;