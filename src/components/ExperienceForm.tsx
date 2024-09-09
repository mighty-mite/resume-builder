import { ExperienceItem } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "./../store/slice";
import { AppDispatch, RootState } from "../store/store";
import ExperienceFormItem from "./ExperienceFormItem";

export default function ExperienceForm() {
  const dispatch = useDispatch<AppDispatch>();

  const onAdd = () => {
    dispatch(
      addExperience({
        title: "",
        employer: "",
        location: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        id: "id",
        responsibilities: [],
      })
    );
  };

  const navigate = useNavigate();

  const jobs = useSelector((state: RootState) => state.form.experience);

  const onSubmit = () => {
    navigate("/build-resume/education");
  };

  const renderJobs = (arr: ExperienceItem[]) => {
    return arr.map((item) => <ExperienceFormItem key={item.id} id={item.id} />);
  };

  const content = renderJobs(jobs);

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-7 pt-10">
      {content}
      <button
        className="font-extrabold transition duration-200 ease-in-out capitalize text-button-secondary border-button-secondary border-2 rounded-3xl hover:bg-button-secondary-hover hover:border-button-secondary-hover hover:text-white"
        type="button"
        onClick={onAdd}>
        add job
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
