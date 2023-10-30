import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },

    reducers : {
    addMessage :(state, action) => {
        state.messages.splice(20,1);
        state.messages.unshift(action.payload);
    },
    clearMessage : (state) =>{
        state.messages = [];
    }
    }
});


export const {addMessage,clearMessage} = chatSlice.actions;
export default chatSlice.reducer;