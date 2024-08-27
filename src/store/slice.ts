import { createSlice, nanoid } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import {
  ExperienceItem,
  ExperiencePayload,
  HeadingFormValues,
  FormState,
  EducationItem,
  EducationPayload,
  Skill,
} from "../utils/types";

const initialState: FormState = {
  heading: {
    name: "",
    position: "",
    phone: "",
    email: "",
    linkedin: "",
    city: "",
  },
  experience: [],
  education: [],
  skills: [],
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

    addEducation: {
      reducer: (state, action: PayloadAction<EducationItem>) => {
        state.education.push(action.payload);
      },
      prepare: (education: EducationItem) => {
        const id = nanoid();
        return { payload: { ...education, id } };
      },
    },

    removeEducation: (state, action: PayloadAction<string>) => {
      state.education = state.education.filter((item) => {
        return item.id !== action.payload;
      });
    },

    updateEducation: (state, action: PayloadAction<EducationPayload>) => {
      const { id, education } = action.payload;
      state.education = state.education.map((item) => {
        if (item.id === id) {
          return (item = education);
        }
        return item;
      });
    },

    addSkill: (state, action: PayloadAction<Skill>) => {
      state.skills.push(action.payload);
    },

    removeSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  updateHeading,
  addExperience,
  removeExperience,
  updateExperience,
  addEducation,
  removeEducation,
  updateEducation,
  addSkill,
  removeSkill,
} = formState.actions;

export default formState.reducer;
