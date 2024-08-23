import "./progress.css";

export default function Progress() {
  return (
    <aside className="w-60 bg-progress-bkg min-h-screen p-8 text-white">
      <ul className="progress__list">
        <li className="progress__item">heading</li>
        <li className="progress__item">professional experiense</li>
        <li className="progress__item">education</li>
        <li className="progress__item">skills</li>
        <li className="progress__item">summary</li>
      </ul>
    </aside>
  );
}
