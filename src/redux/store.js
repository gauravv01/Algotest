import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./FormSlice";


const store = configureStore({reducer:{FormDataSlice:FormSlice.reducer }});


export default store;