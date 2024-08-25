export default function Skills() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <section className="w-full">
      <h2 className="font-bold uppercase text-3xl">
        What skills would you like to highlight?
      </h2>
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-7 pt-10">
        <input
          className="border-solid border #c6c6c6 p-2 w-full focus:outline-none focus:border-sky-500"
          type="text"
        />
        <div className="flex"></div>
      </form>
    </section>
  );
}
