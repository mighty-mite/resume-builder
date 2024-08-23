import { useState } from "react";
import { PhotoModalWindowProps } from "../utils/types";

export default function PhotoModalWindow(props: PhotoModalWindowProps) {
  const [image, setImage] = useState<File | null>(null);
  const { onClose } = props;
  const previewUrl = image ? URL.createObjectURL(image) : null;
  return (
    <div className="bg-semi-transparent top-0 left-0 right-0 bottom-0 fixed h-screen flex items-center justify-center bg-white">
      <div className="">
        {image && <img src={previewUrl || undefined} width="400" alt="photo" />}
        <input
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            console.log(file);
            setImage(file);
          }}
          accept=".png, .jpg, .jpeg"
          type="file"
          id="actual-btn"
        />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
