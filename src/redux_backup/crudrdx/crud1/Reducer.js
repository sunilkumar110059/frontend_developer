
import { createReducer } from '@reduxjs/toolkit'
const initialState = {
    name: "Sunil kumar",
    age: 45,
    status: "coder",
    users: []
}

// this is old reducer
// const myReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "UPDATE_AGE":
//             return {
//                 ...state,
//                 age: 40
//             }
//     }
//     return state
// }


// this is new reducer
const myReducer = createReducer(initialState, (builder) => {
    
    builder.addCase('GET_DATA', (state, action) => {
        state.users = action.payload
    })

    builder.addCase('UPDATE_AGE', (state, action) => {
        state.age = action.payload
    })




})

export default myReducer