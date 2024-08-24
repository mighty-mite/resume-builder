import Button from "./Button";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { HeadingFormValues } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    name: yup.string().min(2, "2 symbols minimum").required(),
    position: yup.string().required("Position is a required field"),
    phone: yup
      .string()
      .matches(/^\d+$/, "Phone number must be numeric")
      .required(),
    email: yup
      .string()
      .email("Wrong email")
      .required("Email is a required field"),
    linkedin: yup.string(),
    city: yup.string().required("Position is a required field"),
  })
  .required();

import { updateHeading } from "./../store/slice";
import { AppDispatch, RootState } from "../store/store";
import { createPortal } from "react-dom";
import PhotoModalWindow from "./PhotoModalWindow";
import { useState } from "react";
import Photo from "./Photo";

export default function HeadingForm() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const { name, position, phone, email, linkedin, city } = useSelector(
    (state: RootState) => state.form.heading
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<HeadingFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name,
      position,
      phone,
      email,
      linkedin,
      city,
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<HeadingFormValues> = (data) => {
    dispatch(updateHeading(data));

    navigate("/build-resume/experience");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-7">
      <Input
        register={register}
        id="name"
        name="name"
        type="text"
        placeholder="Full Name"
        error={errors.name}
        onBlur={() => trigger("name")}
      />
      <Input
        register={register}
        id="position"
        name="position"
        type="text"
        placeholder="Position"
        error={errors.position}
        onBlur={() => trigger("position")}
      />
      <Input
        register={register}
        id="phone"
        name="phone"
        type="tel"
        placeholder="Phone"
        error={errors.phone}
        onBlur={() => trigger("phone")}
      />
      <Input
        register={register}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        error={errors.email}
        onBlur={() => trigger("email")}
      />
      <Input
        register={register}
        id="linkedin"
        name="linkedin"
        type="text"
        placeholder="LinkedIn"
        error={errors.linkedin}
        onBlur={() => trigger("linkedin")}
      />
      <Input
        register={register}
        id="city"
        name="city"
        type="text"
        placeholder="City, country"
        error={errors.city}
        onBlur={() => trigger("city")}
      />
      <Photo onShow={() => setShowModal(true)} />
      {showModal &&
        createPortal(
          <PhotoModalWindow onClose={() => setShowModal(false)} />,
          document.body
        )}
      <Button text="next step" />
    </form>
  );
}
