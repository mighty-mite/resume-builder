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
}

export interface ExperienceFormValues {
  jobs: ExperienceItem[];
}

export interface IButton {
  text: string;
}

export interface IFormState {
  name: string;
  position: string;
  phone: string;
  email: string;
  linkedin: string;
  city: string;
  experience: ExperienceItem[];
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
