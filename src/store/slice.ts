import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { ExperiencePayload, IFormState } from "../utils/types";

const initialState: IFormState = {
  name: "",
  position: "",
  phone: "",
  email: "",
  linkedin: "",
  city: "",
  experience: [],
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
    addExperience: (state, action: PayloadAction<string>) => {
      state.experience = state.experience.concat({
        title: "",
        employer: "",
        location: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        id: action.payload,
      });
    },
    removeExperience: (state, action: PayloadAction<string>) => {
      state.experience = state.experience.filter((item) => {
        return item.id !== action.payload;
      });
    },
    updateExperience: (state, action: PayloadAction<ExperiencePayload>) => {
      const { id, experience } = action.payload;
      state.experience = state.experience.map((item) => {
        if (item.id === id) {
          return (item = experience);
        }
        return item;
      });
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
  addExperience,
  removeExperience,
  updateExperience,
} = formState.actions;

export default formState.reducer;
