import { useEffect, useState } from "react";
import Iimage from "@/icons/Image";
import XButton from "@/icons/x-button";

export const StepThree = ({ onNext, onBack }) => {
  const [stepThreeValue, setStepThreeValue] = useState(()=>{
    const prev = JSON.parse(typeof window !== "undefined" && localStorage.getItem("stepThree") || "{}");
    return prev;
  });
  const [error, setError] = useState({});

  console.log(stepThreeValue);
  useEffect (()=>{
    typeof window !== "undefined" &&  localStorage.setItem("stepThree", JSON.stringify(stepThreeValue));
  }, [stepThreeValue])

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
    console.log("hekkk");

    let hasError = false;
    if (
      !stepThreeValue.dateOfBirth ||
      stepThreeValue.dateOfBirth.length === 0
    ) {
      setError((prev) => ({ ...prev, dateOfBirth: "Төрсөн өдрөө оруулна уу" }));
    } else if (isOver18(stepThreeValue.dateOfBirth) <= 18) {
      console.log("18s doosh");

      setError((prev) => ({
        ...prev,
        dateOfBirth: "Таны нас 18-аас их байх ёстой.",
      }));
      hasError = true;
    }
    if (!stepThreeValue.image) {
      console.log("zuraggu");

      setError((prev) => ({ ...prev, image: "Профайл зурагаа оруулна уу" }));
      hasError = true;
    }
    if (!hasError) {
      console.log("ss");

      onNext();
    }
  };

  const onStepThreeChange = (e) => {
    setError({});
    setStepThreeValue({ ...stepThreeValue, dateOfBirth: e.target.value });
  };
  const onImageChange = (e) => {
    setError({});
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStepThreeValue((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setError({});
    setStepThreeValue((prev) => ({ ...prev, image: null }));
  };

  return (
    <div className="w-[480px] min-h-[655px] p-8 bg-white rounded-lg m-auto animate-slideIn animate-fadeIn">
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
          value={stepThreeValue.dateOfBirth}
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
          <label
            htmlFor="imageInput"
            className="block text-sm font-semibold leading-4 text-[#334155]"
          >
            Profile image <span class="text-red-600">*</span>
          </label>

          {!stepThreeValue.image && (
            <>
              <label
                htmlFor="imageInput"
                className="flex flex-col items-center relative justify-center gap-y-2 cursor-pointer z-10 bg-gray-100 h-[220px] border rounded-md border-solid"
              >
                <div className="rounded-full justify-center items-center flex  flex-col">
                  <Iimage />
                  <p className="text-sm text-center">Browse or Drop Image</p>
                </div>
              </label>
              <input
              value={stepThreeValue.image}
                id="imageInput"
                className="hidden"
                type="file"
                onChange={onImageChange}
              />
            </>
          )}

          {stepThreeValue.image && (
            <div className="relative">
              <XButton className="absolute mt-[10px] right-[10px] " onClick={removeImage} />
              <img
                className="h-[220px] rounded-md w-[415px]"
                src={stepThreeValue.image}
              />
            </div>
          )}

          {error.image && <p className="text-red-600">{error.image}</p>}
        </div>
        <div className="flex w-full gap-x-2 mt-auto">
          <button
          onClick={onBack}
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
            continue 3/3{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
