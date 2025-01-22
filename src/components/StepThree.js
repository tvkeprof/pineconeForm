import { useState } from "react";
import Iimage from "@/icons/Image";

export const StepThree = ({ onNext }) => {
  const [stepThreeValue, setStepThreeValue] = useState({});
  const [error, setError] = useState({});
  

  const isOver18 = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1;
      }
    return age;
  };

  const onSubmit = () => {
    let hasError = false;
    if (
      !stepThreeValue.dateOfBirth ||
      stepThreeValue.dateOfBirth.length === 0
    ) {
      setError((prev) => ({ ...prev, dateOfBirth: "Төрсөн өдрөө оруулна уу" }));
    } else if (isOver18(stepThreeValue.dateOfBirth) <= 18) {
        setError((prev) => ({
          ...prev,
          dateOfBirth: "Таны нас 18-аас их байх ёстой.",
        }));
        hasError = true;
      }
  };

  const onStepThreeChange = (e) => {
    setError({})
    setStepThreeValue({ ...stepThreeValue, dateOfBirth: e.target.value });
  };

  return (
    <div className="w-[480px] min-h-[655px] p-8 bg-white rounded-lg m-auto">
      <div>
        <div className="flex flex-col gap-[20px] space-y-2 mb-7">
          <img className="w-[60px] h-[60px]" src="./pcLogo.png" />
          <h2 className="text-[26px] text-foreground font-semibold">
            Join Us! 😎
          </h2>
          <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="text-sm font-semibold leading-4 text-[#334155] space-y-2">
          Date of birth<span className="text-red-600">*</span>
          <input
            onChange={onStepThreeChange}
            type="date"
            placeholder="--/--/--"
            className="w-full p-3 text-base leading-5 rounded-md outline focus:outline-[#0CA5E9] text-[#121316]"
          />
          {error.dateOfBirth && (
            <p className="text-red-600">{error.dateOfBirth}</p>
          )}
        </div>
        <div className="space-y-2 mt-8">
          <label className="block text-sm font-semibold leading-4 text-[#334155]">
            Profile image <span class="text-red-600">*</span>
          </label>

          <div className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-[180px] border rounded-md border-solid">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
              <Iimage />
            </div>
            <div className="text-sm text-center">Browse or Drop Image</div>
          </div>
          <input hidden type="file" />
          <p class="text-red-600 text-xs">Профайл зурагаа оруулна уу</p>
        </div>
        <div className="flex w-full gap-x-2 mt-auto">
          <button
            type="button"
            className="flex items-center justify-center w-32 h-[44px] mt-[50px] gap-x-3 rounded-md border border-[#CBD5E1] transition-all duration-300 hover:bg-gray-100"
          >
            back
          </button>
          <button
            onClick={onSubmit}
            type="submit"
            className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80 mt-[50px]"
          >
            {" "}
            submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
