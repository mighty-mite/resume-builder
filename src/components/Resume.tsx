import "./resume.css";
import img from "./../assets/img.png";
import WorkExperienceItem from "./WorkExperienceItem";
import EducationItem from "./EducationItem";
import SkillsItem from "./SkillsItem";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
// import { forwardRef } from "react";

// interface Props {
//   ref: React.RefObject<HTMLDivElement>;
//   hello: string;
// }

function Resume() {
  // const name = useSelector((state: RootState) => state.form.name);
  return (
    <div className="resume">
      <div className="resume__name text-left p-5">
        <img className="resume__name-img" src={img} alt="img" width="150" />
        <div className="w-full">
          <h1 className="text-heading-color font-bold text-5xl capitalize">
            John Doe
          </h1>
          <h2 className="text-contrast-color text-2xl capitalize font-bold">
            Data scientist
          </h2>
          <p className="text-black text-l font-semibold">
            Data scientist with experience
          </p>
        </div>
      </div>
      <div className="resume__contacts p-5">
        <div className="resume__contacts-email">tushinov.ayur@gmail.com</div>
        <div className="resume__contacts-phone">+7 916 822-22-81</div>
        <div className="resume__contacts-address">Palo Alto, CA</div>
        <div className="resume__contacts-linkedin">linkedin.com/3216151321</div>
      </div>
      <div className="resume__work p-5 text-left">
        <h2 className="text-heading-color font-bold text-3xl uppercase">
          Work Experience
        </h2>
        <ul>
          <WorkExperienceItem />
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
          <SkillsItem />
          <SkillsItem />
        </ul>
      </div>
    </div>
  );
}

export default Resume;
