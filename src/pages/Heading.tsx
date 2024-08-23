import HeadingForm from "../components/HeadingForm";

export default function Heading() {
  return (
    <section className=" w-full">
      <h2 className="font-bold uppercase text-3xl">
        What’s the best way for employers to contact you?
      </h2>
      <div className="flex pt-10">
        <HeadingForm />
      </div>
    </section>
  );
}
