
import { createAction } from '@reduxjs/toolkit'

// export const getSearchRoutes = () => async (dispatch) => {
//     const result = await axios.get(`${baseUrl}/city`)
//     dispatch({
//         type: SEARCH_ROUTES,
//         payload: result.data
//     });
// }


// export const ageActionFun = (age) => {
//     return {
//         type: "UPDATE_AGE",
//         payload: age
//     }
// }

export const ageActionFun = createAction("UPDATE_AGE")


export const getUserActionFn = () => async (dispatch) => {
    const res = await fetch('http://localhost:8000/user');
    const result = await res.json()
    dispatch({
        type: "GET_DATA",
        payload: result
    })
}
