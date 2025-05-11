import { configureStore } from '@reduxjs/toolkit';
import userDetailsReducer from './slices/userSlice';
import memberDetailsReducer from './slices/memberSlice';
import membersListReducer from './slices/membersListSlice';
import eventsListReducer from './slices/eventListSlice'

export const store = configureStore({
    reducer: {
        userDetails: userDetailsReducer,
        memberDetails: memberDetailsReducer,
        membersList: membersListReducer,
        eventsList: eventsListReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
