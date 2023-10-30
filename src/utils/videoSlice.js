import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: null,
    para: null,
  },

  reducers: {
    addVideos: (state, action) => {
   state.videos = action.payload;
    },

    addPara: (state, action) => {
      state.para = action.payload;
    },
  },
});

export const { addVideos , addPara} = videoSlice.actions;
export default videoSlice.reducer;
