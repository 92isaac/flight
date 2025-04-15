"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRouter } from "next/navigation";
import SignUpFormA from "./SignUpFormA";
import SignUpFormB from "./SignUpFormB";


const SignUp = () => {

  const router = useRouter()



  return (
    <div className="">
   
        <div className="h-screen flex justify-between items-center">
          <SignUpFormA />
          <SignUpFormB
            handleNext={() => {
              router.push("/dashboard")
            }}
          />
        </div>
    </div>
  );
};

export default SignUp;
