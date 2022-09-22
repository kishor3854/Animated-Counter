import { configureStore } from '@reduxjs/toolkit'
import countReducer from "../reducer/countReducer";

export default configureStore({
    reducer: {
        counter: countReducer,
    },
})