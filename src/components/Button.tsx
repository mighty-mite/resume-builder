import { IButton } from "../utils/types";
import { useNavigate } from "react-router-dom";

export default function Button(props: IButton) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/education");
  };
  const { text } = props;
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
}
