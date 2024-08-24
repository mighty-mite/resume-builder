import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[url('./assets/home-bkg.svg')] bg-no-repeat bg-[left_7rem_top_3rem]">
      <h1 className="text-5xl font-medium mb-7">Online Resume Builder</h1>
      <p className="text-2xl font-normal mb-7">
        Easily create the perfect resume for any job using our best-in-class
        resume builder platform.
      </p>
      <button
        onClick={() => navigate("/build-resume/heading")}
        className="block w-72 p-4 bg-gradient-to-r from-gradient-from to-gradient-to text-white">
        Create My Resume Now
      </button>
    </section>
  );
}
