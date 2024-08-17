import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { IFormState } from "../utils/types";

const initialState: IFormState = {
  name: "",
  position: "",
  phone: "",
  email: "",
  linkedin: "",
  city: "",
};

export const formState = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updatePosition: (state, action: PayloadAction<string>) => {
      state.position = action.payload;
    },
    updatePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateLinkedin: (state, action: PayloadAction<string>) => {
      state.linkedin = action.payload;
    },
    updateCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const {
  updateName,
  updatePosition,
  updatePhone,
  updateEmail,
  updateLinkedin,
  updateCity,
} = formState.actions;

export default formState.reducer;
