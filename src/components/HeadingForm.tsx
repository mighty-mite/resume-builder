import Button from "./Button";
import Input from "./Input";

export default function HeadingForm() {
  return (
    <form className="w-full flex flex-col gap-3">
      <h2>Personal Information</h2>
      <Input type="text" placeholder="Full Name" />
      <Input type="text" placeholder="Position" />
      <Input type="tel" placeholder="Phone" />
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="LinkedIn" />
      <Input type="text" placeholder="City, country" />
      <Button text="next step" />
    </form>
  );
}
