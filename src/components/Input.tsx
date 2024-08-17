import { FieldValues } from "react-hook-form";
import { TextInput } from "../utils/types";

export default function Input<T extends FieldValues>(props: TextInput<T>) {
  const { placeholder, type, name, id, register } = props;
  return (
    <input
      id={id}
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
    />
  );
}
