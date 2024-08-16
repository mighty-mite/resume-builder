import { Link } from "react-router-dom";

export default function Main() {
  return (
    <section>
      <h1>The Best Online Resume Builder</h1>
      <p>
        Easily create the perfect resume for any job using our best-in-class
        resume builder platform.
      </p>
      <Link to="/build-resume/heading">Create My Resume Now</Link>
    </section>
  );
}
