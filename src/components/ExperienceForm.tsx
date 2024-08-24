import { ExperienceItem } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addExperience } from "./../store/slice";
import { AppDispatch, RootState } from "../store/store";
import ExperienceFormItem from "./ExperienceFormItem";

export default function ExperienceForm() {
  const dispatch = useDispatch<AppDispatch>();

  const onAdd = () => {
    dispatch(addExperience(uuidv4()));
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
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-7">
      {content}
      <button className="capitalize" type="button" onClick={onAdd}>
        add job
      </button>
      <button className="capitalize" type="button" onClick={onSubmit}>
        next step
      </button>
    </form>
  );
}
