interface Props {
  skill: string;
}

export default function SkillsItem(props: Props) {
  return (
    <li className="bg-skills-bkg text-white p-2 rounded-md max-w-fit list-none">
      {props.skill}
    </li>
  );
}
