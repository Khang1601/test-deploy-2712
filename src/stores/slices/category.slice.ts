import { createSlice } from "@reduxjs/toolkit";


const  categorySlice = createSlice({
    name: "categories",
    initialState: {
        data: null
    },
    reducers: {
        setData: function(state, action) {
            return {
                ...state,
                data: action.payload
            }
        }
    }
})

export const categoryReducer =  categorySlice.reducer;
export const categoryAction =  categorySlice.actions;