import User from "./user";

// Define the shape of the user context
interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export default UserContextType;