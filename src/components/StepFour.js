import { useState } from "react";

export const StepFour = () => {
  return (
    <div className="space-y-2 bg-white rounded-lg w-[480px] flex justify-center items-center m-auto p-8 animate-slideIn animate-fadeIn">
      <div className="flex flex-col gap-[20px] space-y-2 mb-7">
        <img className="w-[60px] h-[60px]" src="./pcLogo.png" />
        <h2 className="text-[26px] text-foreground font-semibold">
          You're All Set! 🔥
        </h2>
        <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>
      </div>
    </div>
  );
};
