import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../app/UserSlice';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const users = useSelector((state) => state.user);

    const handleUpdate = (email) => {
        navigate("/updateuser", {state: {email}});
    }

    const handleDelete = (email) => {
        dispatch(deleteUser(email));
    }

    return (
        <>
            <h1>Registered Users</h1>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {(users || []).map((user, index) => (
                    <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>
                        <button onClick={() => handleUpdate(user.email)}>Update</button>
                        <button onClick={() => handleDelete(user.email)}>Delete</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Link to="/login">Logout</Link>
        </>
    )
}

export default Home;