import { useState, useEffect } from "react";

export const StepOne = ({onNext}) => {
  const [formValue, setFormValue] = useState(()=>{
    const prev = JSON.parse(localStorage.getItem("stepOne") || "{}");

    return prev;
    
  });
  console.log(formValue);
  
  const [error, setError] = useState({});

  useEffect(()=> {
    localStorage.setItem("stepOne", JSON.stringify(formValue));
  }, [formValue]);
  const onSubmit = () => {
    console.log(formValue);
    let hasError = false;
    if (!formValue.firstname || formValue.firstname.length === 0) {
      setError((prev) => ({ ...prev, firstname: "Нэрээ оруулна уу." }));
      hasError = true;
    }
    if (!formValue.lastName || formValue.lastName.length === 0) {
      setError((prev) => ({ ...prev, lastName: "Овгоо оруулна уу." }));
      hasError = true;
    }
    if (!formValue.userName || formValue.userName.length === 0) {
      setError((prev) => ({
        ...prev,
        userName: "Хэрэглэгчийн нэрээ оруулна уу.",
      }));
      hasError = true;
    }
    if (!hasError) {
      setError({});
      onNext();
    }
  };

  const onFirstNameChange = (e) => {
    setError({})
    setFormValue({ ...formValue, firstname: e.target.value });
  };
  const onLastNameChange = (e) => {
    setError({})
    setFormValue({ ...formValue, lastName: e.target.value });
  };
  const onUserNameChange = (e) => {
    setError({})
    setFormValue({ ...formValue, userName: e.target.value });
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
        <div className="flex flex-col flex-grow gap-y-3">
          <div className="text-sm font-semibold leading-4 text-[#334155] space-y-2">
            First name<span className="text-red-600">*</span>
            <input
              onChange={onFirstNameChange}
              placeholder="Your first name"
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
              value={formValue.firstname}
            />
            {error.firstname && (
              <p className="text-red-400">{error.firstname}</p>
            )}
          </div>
          <div className="text-sm font-semibold leading-4 text-[#334155] space-y-2">
            Last name<span className="text-red-600">*</span>
            <input
              onChange={onLastNameChange}
              placeholder="Your last name"
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
              value={formValue.lastName}
            />
            {error.lastName && <p className="text-red-400">{error.lastName}</p>}
          </div>
          <div className="text-sm font-semibold leading-4 text-[#334155] space-y-2">
            Your username<span className="text-red-600">*</span>
            <input
              onChange={onUserNameChange}
              placeholder="Your username"
              className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
              value={formValue.userName}
            />
            {error.userName && <p className="text-red-400">{error.userName}</p>}
          </div>
          <div className="flex w-full gap-x-2 mt-auto">
            <button
              onClick={onSubmit}
              type="submit"
              className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80 mt-[100px]"
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
