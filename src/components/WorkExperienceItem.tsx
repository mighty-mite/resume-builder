import { ExperienceItem } from "../utils/types";

export default function WorkExperienceItem(props: ExperienceItem) {
  const {
    title,
    employer,
    location,
    startMonth,
    startYear,
    endMonth,
    endYear,
    id,
    responsibilities,
  } = props;
  return (
    <li id={id}>
      <h2 className="text-lg font-bold capitalize text-left">{title}</h2>
      <h3 className="text-lg font-semibold capitalize text-left">{employer}</h3>
      <div className="flex justify-between text-contrast-color italic font-semibold w-11/12">
        <span>
          <span>{startMonth}</span>/<span>{startYear}</span> -{" "}
          <span>{endMonth}</span>/<span>{endYear}</span>
        </span>
        <span>{location}</span>
      </div>
      <ul className="experience__list">
        {responsibilities.map((item, i) => {
          return (
            <li
              key={i}
              className="experience-responcibilities text-base font-semibold ml-5 marker:text-contrast-color list-disc">
              {item}
            </li>
          );
        })}
      </ul>
    </li>
  );
}
