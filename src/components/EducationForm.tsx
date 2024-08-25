import { EducationItem } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEducation } from "../store/slice";
import { AppDispatch, RootState } from "../store/store";
import EducationFormItem from "./EducationFormItem";

export default function EducationForm() {
  const dispatch = useDispatch<AppDispatch>();

  const onAdd = () => {
    dispatch(
      addEducation({
        university: "",
        location: "",
        degree: "",
        fieldOfStudy: "",
        graduationYear: "",
        graduationMonth: "",
        id: "id",
      })
    );
  };

  const navigate = useNavigate();

  const education = useSelector((state: RootState) => state.form.education);

  const onSubmit = () => {
    navigate("/build-resume/skills");
  };

  const renderEducation = (arr: EducationItem[]) => {
    return arr.map((item) => <EducationFormItem key={item.id} id={item.id} />);
  };

  const content = renderEducation(education);

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-7 pt-10">
      {content}
      <button
        className="font-extrabold transition duration-200 ease-in-out capitalize text-button-secondary border-button-secondary border-2 rounded-3xl hover:bg-button-secondary-hover hover:border-button-secondary-hover hover:text-white"
        type="button"
        onClick={onAdd}>
        add education
      </button>
      <button
        className="text-white bg-button-bkg uppercase font-extrabold rounded-3xl font-extrabold"
        type="button"
        onClick={onSubmit}>
        next step
      </button>
    </form>
  );
}
