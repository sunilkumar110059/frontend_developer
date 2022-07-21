import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const getUserActionFn = createAsyncThunk('USERS/GET_USER', async () => {
    const res = await fetch('http://localhost:8000/user');
    const result = await res.json()
    return result
})

export const editUserActionFn = createAsyncThunk('USERS/EDIT_USER', async (editobj) => {
    const res = await fetch(`http://localhost:8000/user/${editobj._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editobj)
    });
    const result = await res.json()
    return result
})


export const postUserActionFn = createAsyncThunk('USERS/POST_USER', async (addPost) => {
    const res = await fetch("http://localhost:8000/user", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addPost)
    })
    const result = await res.json()
    return result
})

export const deletetUserActionFn = createAsyncThunk('USERS/DELETE_USER', async (id) => {
    const res = await fetch(`http://localhost:8000/user/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'DELETE'
    });
    const result = res.json();
    return result;
})

export const deletetManyUserActionFn = createAsyncThunk('USERS/DELETE_MANY', async (data) => {
    const res = await fetch(`http://localhost:8000/user`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = res.json();
    return result;
})

const userSlice = createSlice({
    name: "USERS",
    initialState: {
        users: [],
        errors: "",
        status: "",
    },

    extraReducers: {
        //========== Get Method start
        [getUserActionFn.fulfilled]: (state, action) => {

            let newData = action.payload.map((user) => ({ ...user, isCheck: false }))
            return {
                ...state,
                users: newData,
                status: "getSuccess"
            }
        },
        [getUserActionFn.pending]: (state, action) => {
            return { ...state, status: "getLoad" }
        },
        [getUserActionFn.rejected]: (state, action) => {
            return { ...state, status: "getFailed" }
        },
        //========== Get Method end

        //========== Post Method start
        [postUserActionFn.fulfilled]: (state, action) => {
            let err = action.payload.errors
            let validationObj = {
                name: (err?.name?.message) || "",
                username: (err?.username?.message) || "",
                email: (err?.email?.message) || "",
                phone: (err?.phone?.message) || "",
                website: (err?.website?.message) || "",
                street: (err?.["address.street"]?.message) || "",
                suite: (err?.["address.suite"]?.message) || "",
                city: (err?.["address.city"]?.message) || "",
                zipcode: (err?.["address.zipcode"]?.message) || "",
                lat: (err?.["address.geo.lat"]?.message) || "",
                lng: (err?.["address.geo.lng"]?.message) || "",
                companyname: (err?.["company.name"]?.message) || "",
                catchPhrase: (err?.["company.catchPhrase"]?.message) || "",
                bs: (err?.["company.bs"]?.message) || "",
            }
            return {
                ...state,
                users: [action.payload],
                errors: validationObj,
                status: "postSuccess",
            }
        },
        [postUserActionFn.pending]: (state, action) => {
            return { ...state, status: "postLoad" }
        },

        [postUserActionFn.rejected]: (state, action) => {
            return { ...state, status: "postFailed" }
        },
        //========== Post Method end



        //========== Edit Method start
        [editUserActionFn.fulfilled]: (state, action) => {
            return {
                ...state,
                users: [...state.users, action.payload],
                status: "editSuccess",
            }
        },
        [editUserActionFn.pending]: (state, action) => {
            return { ...state, status: "editLoad" }
        },

        [editUserActionFn.rejected]: (state, action) => {
            return { ...state, status: "editFailed" }
        },
        //========== Edit Method end

        //========== Delete Method start
        [deletetUserActionFn.fulfilled]: (state, action) => {
            return {
                ...state,
                users: current(state.users).filter((user) => user._id !== action.payload._id),
                status: "deleteSuccess"
            }
        },
        [deletetUserActionFn.pending]: (state, action) => {
            return { ...state, status: "deleteLoad" }
        },

        [deletetUserActionFn.rejected]: (state, action) => {
            return { ...state, status: "deleteFailed" }
        },
        //========== Delete Method end

        //========== Delete All Method start
        [deletetManyUserActionFn.fulfilled]: (state, action) => {
            let backData = current(state.users).filter((user) => !action.payload.includes(user._id))
            return {
                ...state,
                users: backData,
                status: "deleteAllSuccess"
            }
        }
        //========== Delete All Method end
    }
})

export const userSliceReducer = userSlice.reducer