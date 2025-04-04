import { createSlice } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem('users')) || []

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
            localStorage.setItem('users', JSON.stringify(state))
        },
        deleteUser: (state, action) => {
            const index = state.findIndex( user => user.id == action.payload)
            state.splice(index, 1)
            localStorage.setItem('users', JSON.stringify(state))
        }
    }
})

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;