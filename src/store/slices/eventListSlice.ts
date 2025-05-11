import { createSlice } from '@reduxjs/toolkit';
import { Event } from '@/interfaces';

const eventsList: Event[] = [];

export const eventsListSlice = createSlice({
    name: 'eventsList',
    initialState: {
        eventsList,
    },
    reducers: {
        setEventsList: (state, action) => {
            state.eventsList = action.payload;
        },
    },
});

export const { setEventsList } = eventsListSlice.actions;
export default eventsListSlice.reducer;
