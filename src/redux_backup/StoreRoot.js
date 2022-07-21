import { configureStore } from '@reduxjs/toolkit';
import myReducer from './crudrdx/crud1/Reducer';

const StoreRoot = configureStore({
    reducer: myReducer
    // preloadedState: initialState
})

export default StoreRoot