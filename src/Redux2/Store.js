
import { configureStore } from "@reduxjs/toolkit";
import CountReducer from './CountSlice'

export const Store2 = configureStore({reducer:{
    CountReducer
}})
    
