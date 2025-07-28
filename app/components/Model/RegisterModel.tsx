"use client";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModel from "../hooks/useRegisterModel";
import Model from "./Model";
import Heading from "../Heading";
import Input from "../Input/Input";

const RegisterModel = () => {
  const registerModel = useRegisterModel();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/registor", data)
      .then(() => {
        registerModel.onClose();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome to Airbnb"
        subtitle="Create your account here"
        center
      />
      <Input
        register={register}
        type="email"
        label="Email"
        id="email"
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        register={register}
        type="text"
        label="Name"
        id="name"
        disabled={isLoading}
        errors={errors}
        required
      />
      <Input
        register={register}
        type="password"
        label="Password"
        id="password"
        disabled={isLoading}
        errors={errors}
        required
      />
    </div>
  );
  return (
    <Model
      disabled={isLoading}
      isOpen={registerModel.isOpen}
      title="registor"
      actionLabel="Continue"
      onClose={registerModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModel;
