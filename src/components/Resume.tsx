import "./resume.css";
import img from "./../assets/img.png";
import WorkExperienceItem from "./WorkExperienceItem";
import EducationItem from "./EducationItem";
import SkillsItem from "./SkillsItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
// import { forwardRef } from "react";

// interface Props {
//   ref: React.RefObject<HTMLDivElement>;
//   hello: string;
// }

function Resume() {
  const { name, position, phone, email, linkedin, city } = useSelector(
    (state: RootState) => state.form.heading
  );
  const { experience, education, skills } = useSelector(
    (state: RootState) => state.form
  );

  return (
    <div className="resume" style={{ margin: "0 auto" }}>
      <div className="resume__name text-left p-5">
        <img className="resume__name-img" src={img} alt="img" width="150" />
        <div className="w-full">
          <h1 className="text-heading-color font-bold text-5xl capitalize">
            {name}
          </h1>
          <h2 className="text-contrast-color text-2xl capitalize font-bold">
            {position}
          </h2>
          {/* <p className="text-black text-l font-semibold">
            Data scientist with experience
          </p> */}
        </div>
      </div>
      <div className="resume__contacts p-5">
        <div className="resume__contacts-email">{email}</div>
        <div className="resume__contacts-phone">{phone}</div>
        <div className="resume__contacts-address">{city}</div>
        <div className="resume__contacts-linkedin">{linkedin}</div>
      </div>
      <div className="resume__work p-5 text-left">
        <h2 className="text-heading-color font-bold text-3xl uppercase">
          Work Experience
        </h2>
        <ul>
          {experience.map((item) => (
            <WorkExperienceItem
              title={item.title}
              employer={item.employer}
              location={item.location}
              startMonth={item.startMonth}
              startYear={item.startYear}
              endMonth={item.endMonth}
              endYear={item.endYear}
              id={item.id}
              responsibilities={item.responsibilities}
              key={item.id}
            />
          ))}
        </ul>
      </div>
      <div className="resume__education text-left p-5">
        <h2 className="text-heading-color font-bold text-3xl uppercase">
          Education
        </h2>
        <ul>
          <EducationItem />
        </ul>
      </div>
      <div className="resume__skills text-left p-5">
        <h2 className="text-heading-color font-bold text-3xl uppercase">
          Skills
        </h2>
        <ul className="flex flex-col gap-2">
          {skills.map((item, i) => (
            <SkillsItem key={i} skill={item.skill} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
