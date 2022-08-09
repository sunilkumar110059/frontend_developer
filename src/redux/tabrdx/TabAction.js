import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTabActionFn = createAsyncThunk('TAB/GET', async () => {
    const res = await fetch('http://localhost:8000/tab');
    const result = await res.json()
    return result
})

export const postTabActionFn = createAsyncThunk('TAB/POST', async (tab) => {
    const res = await fetch("http://localhost:8000/tab", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tab)
    })
    const result = await res.json()
    return result
})
