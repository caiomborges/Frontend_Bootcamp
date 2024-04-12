
import { createContext, FC, ReactNode, useMemo, useState } from 'react';
import UserContextType from '../interfaces/UserContextType';
import User from '../interfaces/user';

// Creates the user context
const UserContext = createContext<UserContextType>({ user: null, setUser: () => {} });

// Creates the user context provider component
export const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    // Define the state and methods for the user context
    const [user, setUser] = useState<User | null>(null);
    const memoUser = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <UserContext.Provider value={memoUser}>
            {children}
        </UserContext.Provider>
    );
};

// Export the user context
export default UserContext;