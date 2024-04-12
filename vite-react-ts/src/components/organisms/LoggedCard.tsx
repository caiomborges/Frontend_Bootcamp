import useUserContext from "../../hooks/useUserContext";

/* 
We have here a simple Login form component as we did before on our javascript app

*/
const LoggedCard: React.FC = () => {
    const { user } = useUserContext();

    return (
        <div className='logged'>
            <h1>Welcome!</h1>
            <h3>Name: {user?.name}</h3>
            <h3>Last Name: {user?.surname}</h3>
            <h3>Email: {user?.email}</h3>
            <h3>Gender: {user?.gender}</h3>
            <h3>Password: {user?.password}</h3>
        </div>
    );
};

export default LoggedCard;