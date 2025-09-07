import React from "react";
import { months, years } from "../constant";
import { Link } from "react-router";

import { useForm } from "react-hook-form";
import Form from "../components/form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      surName: "",
      date: "",
      month: "",
      year: "",
      gender: "",
      email: "",
      password: "",
    },
  });
  console.log(errors, "errors");
  return (
    <>
      <div>
        <div className="flex justify-center flex-col items-center">
          <h2 className={`text-6xl font-bold text-blue-600`}>facebook</h2>
          <Form handleSubmit={handleSubmit} register={register} watch={watch} />
        </div>
      </div>
    </>
  );
};

export default Register;
