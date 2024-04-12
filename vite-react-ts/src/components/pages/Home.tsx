import React from "react"
import LoginForm from "../organisms/LoginForm";
import LoggedCard from "../organisms/LoggedCard";
import useUserContext from "../../hooks/useUserContext";

const Home: React.FC = () => {
    const { user } = useUserContext();

    if(user){
        return (
            <LoggedCard/>
        )
    }

    return (
        <LoginForm/>
    )
}

export default Home