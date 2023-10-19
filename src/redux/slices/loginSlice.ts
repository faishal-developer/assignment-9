import { authKey } from "@/constants/storageKey";
import {
  getUserInfo,
  removeUserInfo,
  storeUserInfo,
} from "@/services/auth.service";
import { loginPayload } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  data: loginPayload | null;
}

// Define the initial state using that type
const initialState: CounterState = {
  data: null,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setData: (state, action) => {
      storeUserInfo(action.payload);
      console.log(getUserInfo(action.payload), action.payload, "getUserInfo");
      state.data = getUserInfo(action.payload) as loginPayload;
    },
    setInfo: (state) => {
      state.data = getUserInfo(null) as loginPayload;
    },
    deleteData: (state) => {
      removeUserInfo(authKey);
      state.data = null;
    },
  },
});

export const { setData, deleteData, setInfo } = loginSlice.actions;

export default loginSlice.reducer;
