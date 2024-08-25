import { createSlice, nanoid } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import {
  ExperienceItem,
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

    addExperience: {
      reducer: (state, action: PayloadAction<ExperienceItem>) => {
        state.experience.push(action.payload);
      },
      prepare: (experience: ExperienceItem) => {
        const id = nanoid();
        return { payload: { ...experience, id } };
      },
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
