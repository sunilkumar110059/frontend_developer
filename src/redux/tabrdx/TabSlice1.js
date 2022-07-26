import { createSlice } from '@reduxjs/toolkit';
import { getTabActionFn, postTabActionFn } from './TabAction'

const tabSlice = createSlice({
    name: "TAB",
    initialState: {
        data: [],
        status: "",
    },

    extraReducers: {
        //========== Get Method start
        [getTabActionFn.fulfilled]: (state, action) => {
            return {
                ...state,
                data: action.payload,
                status: "Success",
            }
        },
        [getTabActionFn.pending]: (state, action) => {
            return { ...state, status: "Load" }
        },

        [getTabActionFn.rejected]: (state, action) => {
            return { ...state, status: "Failed" }
        },
        //========== Get Method end


        //========== Post Method start
        [postTabActionFn.fulfilled]: (state, action) => {

            return {
                ...state,
                data: [...state.data, action.payload],
                status: "Success",
            }
        },
        [postTabActionFn.pending]: (state, action) => {
            return { ...state, status: "Load" }
        },

        [postTabActionFn.rejected]: (state, action) => {
            return { ...state, status: "Failed" }
        },
        //========== Post Method end

    }
})

export const tabSliceReducer = tabSlice.reducer