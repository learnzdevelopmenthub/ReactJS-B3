import { createSlice } from "@reduxjs/toolkit";

// const counterReducer = ( state = { current_count: 0 }, action ) => {
    
//     if (action.type === 'INCREMENT') {
//         return { current_count: state.current_count + action.payload }
//     }
//     return state
// }

// export default counterReducer;


const counterSlice = createSlice({
    name: 'count',
    initialState: {current_count: 0},
    reducers: {
        increment: (state, action) => {
            console.log(action)
            state.current_count += action.payload
        },
        decrement:(state, action) => {
            state.current_count -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer