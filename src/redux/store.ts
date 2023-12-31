"use client";
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import testReducer from "./slices/testSlice";
import loginReducer from "./slices/loginSlice";
// ...

export const store = configureStore({
  reducer: {
    testReducer,
    loginReducer: loginReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
