import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { addSkill, removeSkill } from "../store/slice";
import { useDispatch } from "react-redux";
import SkillsItem from "../components/SkillsItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Skill } from "../utils/types";
import { useNavigate } from "react-router-dom";

export default function Skills() {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { skills } = useSelector((state: RootState) => state.form);
  const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addSkill({ id: uuidv4(), skill: state }));
    setState("");
  };

  const renderSkills = (arr: Skill[]) => {
    return arr.map((item) => (
      <div key={item.id} className="relative">
        <SkillsItem skill={item.skill} />
        <button
          type="button"
          onClick={() => dispatch(removeSkill(item.id))}
          className="absolute bg-[url('./assets/icons8-close.svg')] bg-no-repeat bg-contain p-0 size-5 -top-3 -right-3 border-solid rounded-full border-skills-bkg"></button>
      </div>
    ));
  };

  const onNextPage = () => {
    navigate("/resume");
  };

  const content = renderSkills(skills);
  return (
    <section className="w-full">
      <h2 className="font-bold uppercase text-3xl">
        What skills would you like to highlight?
      </h2>
      <form onSubmit={onAdd} className="w-full flex flex-col gap-7 pt-10 pb-10">
        <div className="flex w-full justify-center gap-7">
          <input
            className="border-solid border #c6c6c6 p-2 focus:outline-none focus:border-sky-500 w-1/2"
            type="text"
            onChange={(e) => setState(e.target.value)}
            value={state}
            placeholder="Type then press Enter to add your skill"
          />
          <button
            className="text-white bg-button-bkg uppercase font-extrabold rounded-3xl font-extrabold w-1/6"
            type="submit">
            Add
          </button>
        </div>
        <ul className="flex gap-3 flex-wrap	">{content}</ul>
      </form>
      <button
        className="text-white w-full bg-button-bkg uppercase font-extrabold rounded-3xl font-extrabold"
        type="button"
        onClick={onNextPage}>
        next step
      </button>
    </section>
  );
}
