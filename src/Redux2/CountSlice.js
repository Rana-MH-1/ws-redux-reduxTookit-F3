
import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:'count',
    initialState:{
        count:0
    },
    //create mini-reducers
    reducers:{
       Increment : (state, action) =>{
        state.count++
       }
    }
})

export default countSlice.reducer
export const {Increment} = countSlice.actions 

