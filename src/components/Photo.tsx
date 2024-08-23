import { PhotoProps } from "../utils/types";
import img from "./../assets/no-photo7.png";

export default function Photo(props: PhotoProps) {
  const { onShow } = props;
  return (
    <div>
      <img src={img} width="100" alt="photo" />
      <button
        onClick={(e) => {
          e.preventDefault();
          onShow();
        }}>
        Upload Photo
      </button>
    </div>
  );
}
