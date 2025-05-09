import { configureStore } from '@reduxjs/toolkit';
import userDetailsReducer from './slices/userSlice';
import memberDetailsReducer from './slices/memberSlice';
import membersListReducer from './slices/membersListSlice';

export const store = configureStore({
    reducer: {
        userDetails: userDetailsReducer,
        memberDetails: memberDetailsReducer,
        membersList: membersListReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
