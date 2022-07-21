import { configureStore } from '@reduxjs/toolkit';
import { userSliceReducer } from './crudrdx/crud1/UserSlice';
import { todoSliceReducer } from './crudrdx/crud1/TodoSlice';
import { searchSliceReducer } from './searchrdx/SearchSlice1'

const StoreRoot = configureStore({
    reducer: {
        userdata: userSliceReducer,
        tododata: todoSliceReducer,
        searchdata: searchSliceReducer,
        devTools: true,
    }

    // preloadedState: initialState
})

export default StoreRoot