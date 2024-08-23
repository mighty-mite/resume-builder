export default function WorkExperienceItem() {
  return (
    <li>
      <h2 className="text-lg font-bold capitalize text-left">data scientist</h2>
      <h3 className="text-lg font-semibold capitalize text-left">Company</h3>
      <div className="flex justify-between text-contrast-color italic font-semibold w-11/12">
        <span>
          <span>06</span>/<span>2020</span> - <span>Present</span>
        </span>
        <span>Palo Alto</span>
      </div>
      <ul className="experience__list">
        <li className="experience-responcibilities text-base font-semibold ml-5 marker:text-contrast-color list-disc">
          Develop action plane to mitigate risks in decision making while
          increasing profitability by leveraging data science
        </li>
        <li className="experience-responcibilities text-base font-semibold ml-5 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quos,
          repellat quisquam commodi ad alias ab quasi ea laboriosam, perferendis
          facere nihil est ipsum dolorum voluptatum iste repellendus laborum
          animi!
        </li>
      </ul>
    </li>
  );
}
