import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { categoryReducer } from "./slices/category.slice";
import { userReducer } from "./slices/user.slice";

const RootReducer = combineReducers({
    categoryStore: categoryReducer, 
    userStore: userReducer
})

export type Store = ReturnType<typeof RootReducer>;

export const store = configureStore({
    reducer: RootReducer
})