import { configureStore } from '@reduxjs/toolkit';
import userDetailsReducer from './slices/userSlice';
import memberDetailsReducer from './slices/memberSlice';

export const store = configureStore({
    reducer: {
        userDetails: userDetailsReducer,
        memberDetails: memberDetailsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
