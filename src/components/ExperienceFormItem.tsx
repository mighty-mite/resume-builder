import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { removeExperience, updateExperience } from "../store/slice";
import { useEffect, useState } from "react";
import { ExperienceItem } from "../utils/types";

interface Props {
  id: string;
}

export default function ExperienceFormItem(props: Props) {
  const { id } = props;
  const { experience } = useSelector((state: RootState) => state.form);
  const current = experience.find((element) => element.id === id);

  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<ExperienceItem>({
    title: current?.title || "",
    employer: current?.employer || "",
    location: current?.location || "",
    startMonth: current?.startMonth || "",
    startYear: current?.startYear || "",
    endMonth: current?.endMonth || "",
    endYear: current?.endYear || "",
    id,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    dispatch(updateExperience({ id, experience: state }));
  }, [state]);

  return (
    <div className="flex flex-col gap-7 border-b-4 pb-8">
      <div className="relative">
        <input
          className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
          id={`job-title-${id}`}
          name="title"
          type="text"
          placeholder="Job Title"
          onChange={handleChange}
          value={state.title}
        />
      </div>
      <div className="relative">
        <input
          className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
          id={`employer-${id}`}
          name="employer"
          type="text"
          placeholder="Employer"
          onChange={handleChange}
          value={state.employer}
        />
      </div>
      <div className="relative">
        <input
          className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
          id={`location-${id}`}
          name="location"
          type="text"
          placeholder="Location"
          onChange={handleChange}
          value={state.location}
        />
      </div>

      <div className="flex justify-between gap-7">
        <div className="grow">
          <h3 className="mb-5">Start Date</h3>
          <div className="flex gap-7">
            <input
              className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
              id={`start-date-month-${id}`}
              name="startMonth"
              type="text"
              placeholder="Month"
              onChange={handleChange}
              value={state.startMonth}
            />
            <input
              className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
              id={`start-date-year-${id}`}
              name="startYear"
              type="text"
              placeholder="Year"
              onChange={handleChange}
              value={state.startYear}
            />
          </div>
        </div>

        <div className="grow">
          <h3 className="mb-5">End Date</h3>
          <div className="flex gap-7">
            <input
              className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
              id={`end-date-month-${id}`}
              name="endMonth"
              type="text"
              placeholder="Month"
              onChange={handleChange}
              value={state.endMonth}
            />
            <input
              className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
              id={`end-date-year-${id}`}
              name="endYear"
              type="text"
              placeholder="Year"
              onChange={handleChange}
              value={state.endYear}
            />
          </div>
        </div>
      </div>

      <button
        className="font-extrabold bg-black text-white rounded-3xl"
        type="button"
        onClick={() => dispatch(removeExperience(id))}>
        Delete
      </button>
    </div>
  );
}
