import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getSearchActionFn = createAsyncThunk('SEARCH/GET', async () => {
    const res = await fetch('http://localhost:8000/city');
    const result = await res.json()
    return result
})

export const postSearchActionFn = createAsyncThunk('SEARCH/POST', async (todo) => {
    const res = await fetch("http://localhost:8000/city", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    })
    const result = await res.json()
    return result
})


const searchSlice = createSlice({
    name: "SEARCH",
    initialState: {
        data: [],
        status: "",
    },

    extraReducers: {
        //========== Get Method start
        [getSearchActionFn.fulfilled]: (state, action) => {
            return {
                ...state,
                data: action.payload,
                status: "Success",
            }
        },
        [getSearchActionFn.pending]: (state, action) => {
            return { ...state, status: "Load" }
        },

        [getSearchActionFn.rejected]: (state, action) => {
            return { ...state, status: "Failed" }
        },
        //========== Get Method end


        //========== Post Method start
        [postSearchActionFn.fulfilled]: (state, action) => {
          
            return {
                ...state,
                data: [...state.data, action.payload],
                status: "Success",
            }
        },
        [postSearchActionFn.pending]: (state, action) => {
            return { ...state, status: "Load" }
        },

        [postSearchActionFn.rejected]: (state, action) => {
            return { ...state, status: "Failed" }
        },
        //========== Post Method end

    }
})

export const searchSliceReducer = searchSlice.reducer