import { createSlice } from '@reduxjs/toolkit';

const details = {
    _id: '',
    name: '',
    cpf: '',
    email: '',
    phone: '',
    birthdate: '',
};

export const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: {
        details,
    },
    reducers: {
        setUserDetails: (state, action) => {
            state.details = action.payload;
        },
    },
});

export const { setUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
