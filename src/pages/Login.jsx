import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const users = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    const handleUpdate = (event) => {
        setLoginDetails({
            ...loginDetails,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const user = (users || []).find((u) => u.email === loginDetails.email && u.password === loginDetails.password);
        
        if (!user){
            return alert("Email or password incorrect!");
        }
        
        setLoginDetails({
            email: '',
            password: ''
        });

        return navigate("/home");
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">
                    <span>Email</span>
                    <input
                    type="email"
                    name="email"
                    onChange={handleUpdate}
                    value={loginDetails.email}
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
                    value={loginDetails.password}
                    />
                </label>
                </div>
                <button type="submit">Login</button>
            </form>

            <Link to="/signin">Register</Link>
        </>
    )
}

export default Login