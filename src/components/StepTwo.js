import { useState } from "react";

export const StepTwo = ({onNext}) => {
  const [stepTwoValue, setStepTwoValue] = useState({});
  const [error, setError] = useState({});

  const onSubmit = () => {
    let hasError = false;
    if (!stepTwoValue.Email || stepTwoValue.Email.length === 0) {
      setError((prev) => ({ ...prev, Email: "Мэйл хаягаа оруулна уу" }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stepTwoValue.Email)) {
      setError((prev) => ({ ...prev, Email: "Зөв имэйл хаяг оруулна уу." }));
      hasError=true;
    }
    if (!stepTwoValue.PhoneNumber || stepTwoValue.PhoneNumber.length === 0) {
      setError((prev) => ({
        ...prev,
        PhoneNumber: "Утасны дугаараа оруулна уу.",
      }));
    } else if (!/^\d{8}$/.test(stepTwoValue.PhoneNumber)) {
      setError((prev) => ({
        ...prev,
        PhoneNumber: "8 оронтой дугаар оруулна уу.",
      }));
      hasError=true;
    }
    if (!stepTwoValue.Password || stepTwoValue.Password.length === 0) {
      setError((prev) => ({
        ...prev,
        Password: "Нууц үгээ оруулна уу.",
      }));
    } else if (!/^\d{6}$/.test(stepTwoValue.Password)) {
      setError((prev) => ({
        ...prev,
        Password: "6 оронтой дугаар оруулна уу.",
      }));
      hasError=true;
    }
    if (
      !stepTwoValue.ConfirmPassword ||
      stepTwoValue.ConfirmPassword.length === 0
    ) {
      console.log("1");
      setError((prev) => ({
        ...prev,
        ConfirmPassword: "Нууц үгээ давтаж оруулна уу.",
      }));
    } else if (stepTwoValue.Password !== stepTwoValue.ConfirmPassword) {
      setError((prev) => ({
        ...prev,
        ConfirmPassword: "Таны оруулсан нууц үг таарахгүй байна.",
      }));
      hasError=true;
    } 
    if (!hasError){
        onNext();
    }
  };
  const onEmailChange = (e) => {
    setError({});
    setStepTwoValue({ ...stepTwoValue, Email: e.target.value });
  };
  const onPhoneNumberChange = (e) => {
    setError({});
    setStepTwoValue({ ...stepTwoValue, PhoneNumber: e.target.value });
  };
  const onPasswordChange = (e) => {
    setError({});
    setStepTwoValue({ ...stepTwoValue, Password: e.target.value });
  };
  const onConfirmPasswordChange = (e) => {
    setError({});
    setStepTwoValue({ ...stepTwoValue, ConfirmPassword: e.target.value });
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
        <div className="flex flex-col flex-grow gap-y-3">
          <div className="text-sm font-semibold leading-4 text-[#334155] space-y-2">
            Email<span className="text-red-600">*</span>
            <input
              onChange={onEmailChange}
              placeholder="Your email"
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            />
            {error.Email && <p className="text-red-600">{error.Email}</p>}
          </div>
          <div className="text-sm font-semibold leading-4 text-[#334155] space-y-2">
            Phone number<span className="text-red-600">*</span>
            <input
              onChange={onPhoneNumberChange}
              placeholder="Your phone number"
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            />
            {error.PhoneNumber && (
              <p className="text-red-600">{error.PhoneNumber}</p>
            )}
          </div>
          <div className="text-sm font-semibold leading-4 text-[#334155] space-y-2">
            Password<span className="text-red-600">*</span>
            <input
            type="password"
              onChange={onPasswordChange}
              placeholder="Your password"
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            />
            {error.Password && <p className="text-red-600">{error.Password}</p>}
          </div>
          <div className="text-sm font-semibold leading-4 text-[#334155] space-y-2">
            Confirm password<span className="text-red-600">*</span>
            <input
            type="password"
              onChange={onConfirmPasswordChange}
              placeholder="Confirm password"
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            />
            {error.ConfirmPassword && (
              <p className="text-red-600">{error.ConfirmPassword}</p>
            )}
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
    </div>
  );
};
