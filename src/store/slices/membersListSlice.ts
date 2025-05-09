import { createSlice } from "@reduxjs/toolkit";
import { Member } from "@/interfaces";

const membersList: Member[] = []

export const membersListSlice = createSlice({
    name: 'membersList',
    initialState: {
        membersList
    },
    reducers: {
        setMembersList: (state, action) => {
            state.membersList = action.payload;
        },
    },
});

export const { setMembersList } = membersListSlice.actions;
export default membersListSlice.reducer;