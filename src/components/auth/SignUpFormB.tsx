"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { validate } from "validate.js";
import { Form, Field } from "react-final-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation"
import Input from "./Input";
import PasswordField from "./PasswordField";


interface NextProps{
  handleNext:()=>void;
}

const constraints = {
  email_address: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
    },
    format: {
      pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      message:
        "^Password must be between 8 and 20 characters long, n/ contain at least one uppercase letter, one number, n/ and one special character",
    },
  },
};

const SignUpFormB:React.FC<NextProps> = ({handleNext}) => {
  const [eyeState, setEyeState] = useState(false);
  const router = useRouter()

  const onSubmit = async (values: { email_address: string; password: string }) => {
    try {
    
        handleNext()
    
      console.log(values);
    } catch (err: any) {
     
      console.error("Failed to log in user", err);
    }
  };

  const validateForm = (values: any) => {
    return validate(values, constraints) || {};
  };
  return (
    <div className="flex-1 relative font-montserrat flex justify-between flex-col h-full">
    <div className="mx-auto w-7/12 py-24">
      <button className="flex gap-2 items-center border px-3 py-2 mb-10 rounded-full" onClick={()=>router.push("/")}>
        <ChevronLeft />
        Back
      </button>

      <div className="w-full pb-10">
        <h1 className="font-semibold text-[calc(2rem-4px)] ">Sign in...</h1>
        <p className="text-[calc(1rem-4px)] font-normal ">Let start with the basics</p>
      </div>

      <Form
        onSubmit={onSubmit}
        validate={validateForm}
        render={({ handleSubmit, form, submitting }) => (
          <form onSubmit={handleSubmit} className="space-y-1">
            <Field name="email_address">
              {({ input, }) => (
                <Input
                  placeholder="Email"
                  type="email"
                  form={form as any}
                  {...input}
                />
              )}
            </Field>

            <Field name="password">
              {({ input, }) => (
                <PasswordField
                  id="password"
                  eyeState={eyeState}
                  toggleEye={() => setEyeState((prev) => !prev)}
                  placeholder="*******"
                  form={form as any}
                  {...input}
                />
              )}
            </Field>
            <div className="flex flex-col mt-5">
              <button
                type="submit"
                className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#4CAF50] text-white font-[500] shadow-lg hover:opacity-90 transition duration-300"
                
              >
                {submitting ? "Waiting..." : "Sign in"}
              </button>
              <button
                type="button"
                className="w-full hidden mt-2 py-3 rounded-full bg-gradient-to-r from-[#D1E9FF] to-[#D1E9FF] font-[600]  gap-2 text-[#1570EF] justify-center items-center hover:opacity-90 transition duration-300"
              >
                <FcGoogle />
                Continue with Google
              </button>
            </div>
            <p className="text-center text-[#98A2B3]">
              Already have an account ?{" "}
              <Link href={"/log-in"} className="text-[#4CAF50]">
                Log In
              </Link>
            </p>
          </form>
        )}
      />
    </div>
    <p className="absolute bottom-1 left-0 right-0 flex justify-center items-center text-[#718096] text-[calc(1rem-2px)]">
      {/* © 2024 TaxRobot. All Rights Reserved. */}
    </p>
  </div>
  )
}

export default SignUpFormB
