import { FieldValues } from "react-hook-form";
import { TextInput } from "../utils/types";

export default function Input<T extends FieldValues>(props: TextInput<T>) {
  const { placeholder, type, name, id, register, error, onBlur } = props;
  return (
    <div className="relative">
      <input
        id={id}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        className={`border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500 ${
          error ? "invalid" : ""
        }`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1 font-bold absolute">
          {error.message}
        </p>
      )}
    </div>
  );
}
