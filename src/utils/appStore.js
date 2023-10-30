import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import videoReducer from "./videoSlice"
import chatReducer from "./chatSlice"


const appStore = configureStore({
    reducer : {
        app: appReducer,
        search : searchReducer,
        video: videoReducer,
        chat: chatReducer,
    }

});

export default appStore;