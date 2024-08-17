import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface TextInput<T extends FieldValues> {
  type: string;
  placeholder: string;
  name: Path<T>;
  id: string;
  register: UseFormRegister<T>;
}

export interface HeadingFormValues {
  name: string;
  position: string;
  phone: string;
  email: string;
  linkedin: string;
  city: string;
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
}
