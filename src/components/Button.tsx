import { IButton } from "../utils/types";

export default function Button(props: IButton) {
  const { text } = props;
  return <button type="submit">{text}</button>;
}
