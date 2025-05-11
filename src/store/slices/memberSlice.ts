import { createSlice } from '@reduxjs/toolkit';

const details = {
    _id: '',
    name: '',
    cpf: '',
    birthdate: '',
    healthInsurance: '',
    emergencyNumber: '',
    medicalConditions: []
};

export const memberDetailsSlice = createSlice({
    name: 'memberDetails',
    initialState: {
        details,
    },
    reducers: {
        setMemberDetails: (state, action) => {
            state.details = action.payload;
        },
    },
});

export const { setMemberDetails } = memberDetailsSlice.actions;
export default memberDetailsSlice.reducer;
