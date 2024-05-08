import React from "react";
import Logo from "../../public/assets/Logo.png";
import { RxCross1 } from "react-icons/rx";
import auth from "../lib/api/auth";
import { BsExclamationCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import ValidSubmit from "./components/ValidSubmit";

const Register = () => {
  const {isSubmitted, submitForm, inputList,validateForm } = auth();
  if(isSubmitted){
    return <ValidSubmit/>
  }
  return (
    <section className="flex flex-col gap-20">
      <div className="flex-row-center justify-between">
        <img src={Logo} alt="logo" className="md:w-28 w-20" />
        <NavLink to="/" className="p-2 rounded-full border-[1px] border-shade1 text-xl">
          <RxCross1 />
        </NavLink>
      </div>
      <div className="md:w-[350px] mx-auto flex flex-col gap-10">
        <div className=" text-center mx-auto w-full ">
          <p className="font-grace text-green text-2xl">Registration Form</p>
          <p className="md:text-4xl text-3xl font-semibold">
            Start your success Journey here!
          </p>
        </div>
        <form className="flex flex-col justify-center gap-10 " onSubmit={submitForm}>
          <div className="flex flex-col gap-5 justify-center">
            {inputList.map((ele,index) => (
              <React.Fragment key={index}>
              <input type={ele.type} placeholder={ele.placeholder} value={ele.value} onChange={ele.onChange} />
              {ele?.remarks && ele?.value.length>0 && !ele?.condition() &&  <p className="text-xs text-red-500 font-bold flex-row-center gap-1 "><span className=" ">< BsExclamationCircleFill/></span>{ele?.remarks}</p>}
              </React.Fragment>
            ))}
          </div>
          <button
            type="submit"
            className={`redirect text-white  ${validateForm()?'bg-black':'bg-shade1'}`} disabled={!validateForm()}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
