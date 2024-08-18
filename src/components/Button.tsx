import { IButton } from "../utils/types";

export default function Button(props: IButton) {
  const { text } = props;
  return (
    <button
      className="text-white bg-button-bkg uppercase font-extrabold rounded-3xl"
      type="submit">
      {text}
    </button>
  );
}
