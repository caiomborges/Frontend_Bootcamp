import { createSlice } from '@reduxjs/toolkit';
import { users } from '../data/data';

const userSlice = createSlice({
    name: 'user',
    initialState: users,
    reducers: {
        createUser: (state, action) => {
            const email = state.find(
                (user) => user.email.toLowerCase() === action.payload.email.toLowerCase()
            );

            if (email) {
                return alert("User already registered!");
            }

            state.push(action.payload);
        },

        deleteUser: (state, action) => {
            return state.filter((user) => user.email !== action.payload);
        },

        updateUser: (state, action) => {
            const { email, user } = action.payload;

            const index = state.findIndex((u) => u.email === email);

            if (index !== -1) {
                state[index] = { ...state[index], ...user };
            }
        }
    }
});

export const { createUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;