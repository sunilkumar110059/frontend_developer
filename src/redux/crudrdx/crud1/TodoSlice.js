import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const getTodoActionFn = createAsyncThunk('TODOS/GET', async () => {
    const res = await fetch('http://localhost:8000/todo');
    const result = await res.json()
    return result
})

export const editTodoActionFn = createAsyncThunk('TODOS/EDIT', async (obj) => {
    const res = await fetch(`http://localhost:8000/todo/${obj._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    });
    const result = await res.json()
    return result
})


export const postTodoActionFn = createAsyncThunk('TODOS/POST', async (todo) => {
    const res = await fetch("http://localhost:8000/todo", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    })
    const result = await res.json()
    return result
})

export const deletetTodoActionFn = createAsyncThunk('TODOS/DELETE', async (id) => {
    const res = await fetch(`http://localhost:8000/todo/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'DELETE'
    });
    const result = res.json();
    return result;
})



const todoSlice = createSlice({
    name: "TODOS",
    initialState: {
        todos: [],
        editTodos: "",
        errors: "",
        status: "",
    },
    
    reducers: {
        editObjectPassFn: (state, action) => {
            return {
                ...state,
                editTodos: action.payload
            }
        },
    },

    extraReducers: {
        //========== Get Method start
        [getTodoActionFn.fulfilled]: (state, action) => {
            return {
                ...state,
                todos: action.payload,
                status: "Success",
            }
        },
        [getTodoActionFn.pending]: (state, action) => {
            return { ...state, status: "Load" }
        },

        [getTodoActionFn.rejected]: (state, action) => {
            return { ...state, status: "Failed" }
        },
        //========== Get Method end


        //========== Post Method start
        [postTodoActionFn.fulfilled]: (state, action) => {
            let err = action.payload.errors
            let validationObj = {
                name: (err?.name?.message) || "",
                email: (err?.email?.message) || "",
            }
            return {
                ...state,
                todos: [...state.todos, action.payload],
                errors: validationObj,
                status: "Success",
            }
        },
        [postTodoActionFn.pending]: (state, action) => {
            return { ...state, status: "Load" }
        },

        [postTodoActionFn.rejected]: (state, action) => {
            return { ...state, status: "Failed" }
        },
        //========== Post Method end


        //========== Edit Method start
        [editTodoActionFn.fulfilled]: (state, action) => {
            return {
                ...state,
                todos: current(state.todos).map((todos) => todos._id === action.payload._id ? action.payload : todos),
                status: "Success",
            }
        },

        //========== delete Method start
        [deletetTodoActionFn.fulfilled]: (state, action) => {
            let fltrtodo = current(state.todos).filter((tod) => tod._id !== action.payload._id)
            return {
                ...state,
                todos: fltrtodo,
                status: "Success",
            }
        },

    }
})

export const { editObjectPassFn } = todoSlice.actions;
export const todoSliceReducer = todoSlice.reducer