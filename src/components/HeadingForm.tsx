import Button from "./Button";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { HeadingFormValues } from "../utils/types";
import { useNavigate } from "react-router-dom";
// import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import {
  updateName,
  updatePosition,
  updatePhone,
  updateEmail,
  updateLinkedin,
  updateCity,
} from "./../store/slice";
import { AppDispatch } from "../store/store";

export default function HeadingForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<HeadingFormValues>();
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit: SubmitHandler<HeadingFormValues> = (data) => {
    dispatch(updateName(data.name));
    dispatch(updatePosition(data.position));
    dispatch(updatePhone(data.phone));
    dispatch(updateEmail(data.email));
    dispatch(updateLinkedin(data.linkedin));
    dispatch(updateCity(data.city));

    navigate("/build-resume/experience");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-3">
      <h2>Personal Information</h2>
      <Input
        register={register}
        id="name"
        name="name"
        type="text"
        placeholder="Full Name"
      />
      <Input
        register={register}
        id="position"
        name="position"
        type="text"
        placeholder="Position"
      />
      <Input
        register={register}
        id="phone"
        name="phone"
        type="tel"
        placeholder="Phone"
      />
      <Input
        register={register}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
      />
      <Input
        register={register}
        id="linkedin"
        name="linkedin"
        type="text"
        placeholder="LinkedIn"
      />
      <Input
        register={register}
        id="city"
        name="city"
        type="text"
        placeholder="City, country"
      />
      <Button text="next step" />
    </form>
  );
}
