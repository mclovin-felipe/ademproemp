"use client";

import CreateUser from "./components/createUser";
import CheckUser from "./components/checkUser";
import { useState } from "react";
import PayOrder from "./components/payOrder";
const Page = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-white text-black">
      <div className=" w-5/6 lg:w-1/2 mx-auto  bg-white drop-shadow-2xl rounded-md p-14 animate-fadeIn">
        {step === 1 && <CheckUser setStep={setStep} />}
        {step === 2 && <CreateUser setStep={setStep} />}
        {step === 3 && <PayOrder />}
      </div>
    </div>
  );
};
export default Page;
