import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import {
  ExperiencePayload,
  HeadingFormValues,
  IFormState,
} from "../utils/types";

const initialState: IFormState = {
  heading: {
    name: "",
    position: "",
    phone: "",
    email: "",
    linkedin: "",
    city: "",
  },
  experience: [],
};

export const formState = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateHeading: (state, action: PayloadAction<HeadingFormValues>) => {
      state.heading = action.payload;
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
  updateHeading,
  addExperience,
  removeExperience,
  updateExperience,
} = formState.actions;

export default formState.reducer;
