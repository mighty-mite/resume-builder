import { TextInput } from "../utils/types";

export default function Input(props: TextInput) {
  const { placeholder, type } = props;
  return (
    <input
      type={type}
      className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
      placeholder={placeholder}
    />
  );
}
