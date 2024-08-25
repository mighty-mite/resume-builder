import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { removeEducation, updateEducation } from "../store/slice";
import { useEffect, useState } from "react";
import { EducationItem } from "../utils/types";

interface Props {
  id: string;
}

export default function EducationFormItem(props: Props) {
  const { id } = props;
  const { education } = useSelector((state: RootState) => state.form);
  const current = education.find((element) => element.id === id);

  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState<EducationItem>({
    university: current?.university || "",
    location: current?.location || "",
    degree: current?.degree || "",
    fieldOfStudy: current?.fieldOfStudy || "",
    graduationYear: current?.graduationYear || "",
    graduationMonth: current?.graduationMonth || "",
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
    dispatch(updateEducation({ id, education: state }));
  }, [state]);

  return (
    <div className="flex flex-col gap-7 border-b-4 pb-8">
      <div className="relative">
        <input
          className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
          // id={`job-title-${id}`}
          name="university"
          type="text"
          placeholder="University"
          onChange={handleChange}
          value={state.university}
        />
      </div>
      <div className="relative">
        <input
          className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
          // id={`employer-${id}`}
          name="location"
          type="text"
          placeholder="Location"
          onChange={handleChange}
          value={state.location}
        />
      </div>
      <div className="relative">
        <input
          className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
          // id={`location-${id}`}
          name="degree"
          type="text"
          placeholder="Degree"
          onChange={handleChange}
          value={state.degree}
        />
      </div>

      <div className="flex justify-between gap-7">
        <div className="grow">
          <h3 className="mb-5">Start Date</h3>
          <div className="flex gap-7">
            <input
              className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
              // id={`start-date-month-${id}`}
              name="fieldOfStudy"
              type="text"
              placeholder="Field Of Study"
              onChange={handleChange}
              value={state.fieldOfStudy}
            />
            <input
              className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
              // id={`start-date-year-${id}`}
              name="graduationMonth"
              type="text"
              placeholder="Graduation Month"
              onChange={handleChange}
              value={state.graduationMonth}
            />
          </div>
        </div>

        <div className="grow">
          <h3 className="mb-5">End Date</h3>
          <div className="flex gap-7">
            <input
              className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
              id={`end-date-month-${id}`}
              name="graduationYear"
              type="text"
              placeholder="Graduation Year"
              onChange={handleChange}
              value={state.graduationYear}
            />
          </div>
        </div>
      </div>

      <button
        className="font-extrabold bg-black text-white rounded-3xl"
        type="button"
        onClick={() => dispatch(removeEducation(id))}>
        Delete
      </button>
    </div>
  );
}
