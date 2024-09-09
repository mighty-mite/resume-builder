import {
  FieldValues,
  Path,
  UseFormRegister,
  FieldError,
} from "react-hook-form";

export interface TextInput<T extends FieldValues> {
  type: string;
  placeholder: string;
  name: Path<T>;
  id: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  onBlur: () => void;
}

export interface HeadingFormValues {
  name: string;
  position: string;
  phone: string;
  email: string;
  linkedin?: string;
  city: string;
}

export interface ExperienceItem {
  title: string;
  employer: string;
  location: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  id: string;
  responsibilities: string[];
}

export interface EducationItem {
  university: string;
  location: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: string;
  graduationMonth: string;
  id: string;
}

export interface Skill {
  skill: string;
  id: string;
}

export interface ExperienceFormValues {
  jobs: ExperienceItem[];
}

export interface IButton {
  text: string;
}

export interface FormState {
  heading: HeadingFormValues;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: Skill[];
}

export interface PhotoModalWindowProps {
  onClose: () => void;
}

export interface PhotoProps {
  onShow: () => void;
}

export interface ExperiencePayload {
  id: string;
  experience: ExperienceItem;
}

export interface EducationPayload {
  id: string;
  education: EducationItem;
}
