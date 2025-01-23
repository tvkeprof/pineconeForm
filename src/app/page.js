"use client";
import { useState } from "react";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { StepFour } from "@/components/StepFour";

export default function Home() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const backStep = () => {
    setStep((prevStep) => prevStep -1)
  };
  return (
    <div className="w-screen h-screen items-center justify-center bg-[#F4F4F4] ">
      {step === 1 && <StepOne onNext={nextStep} />}
      {step === 2 && <StepTwo onNext={nextStep} onBack={backStep}  />}
      {step === 3 && <StepThree onNext={nextStep} onBack={backStep}  />}
      {step === 4 && <StepFour />}

    </div>
  );
}
