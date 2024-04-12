import { useContext } from "react";
import UserContextType from "../interfaces/UserContextType";
import UserContext from "../context/UserContext";

// Creates a custom hook to access the user context
const useUserContext = (): UserContextType => {
    const context = useContext<UserContextType>(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
};

export default useUserContext;