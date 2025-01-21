import { useState } from "react";

export const StepOne = () => {

    const [formValue, setFormValue] = useState({});
    const [error, setError] = useState({})
    const onSubmit = () => {
        console.log(formValue);
        if(!formValue.firstname || formValue.firstname.length === 0){
            setError((prev)=>({...prev, firstname:"222"}))
        }
        
    }

    const onFirstNameChange = (e) => {
        setFormValue(e.target.value)
    }




    return  <div className="w-[480px] min-h-[655px] p-8 bg-white rounded-lg m-auto">
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
          />
          {error.formValue ?.  (<p className="text-red-400">{error.formValue}</p>) }
        </div>
        <div className="text-sm font-semibold leading-4 text-[#334155] space-y-2">
          Last name<span className="text-red-600">*</span>
          <input
            placeholder="Your last name"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
          />
        </div>
        <div className="text-sm font-semibold leading-4 text-[#334155] space-y-2">
          Your username<span className="text-red-600">*</span>
          <input
            placeholder="Your username"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
          />
        </div>
        <div className="flex w-full gap-x-2 mt-auto">
          <button
          onClick={onSubmit}
            type="submit"
            className="flex flex-1 items-center justify-center h-[44px] gap-x-3 rounded-md bg-[#121316] text-white transition-all duration-300 hover:opacity-80 mt-[100px]"
          > submit </button>
        </div>
      </div>
    </div>
  </div>;

}