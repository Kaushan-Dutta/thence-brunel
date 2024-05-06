import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoDotFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Img1 from "../../public/assets/Img1.png";
import Img3 from "../../public/assets/Img3.png";
import { AiOutlinePlus } from "react-icons/ai";
import questions from "../../public/json/question.json"

import { FaRocket } from "react-icons/fa";

const features = [
  "Enhance fortune 50 company’s insights teams research capabilities",
  "Enhance fortune 50 company’s insights teams research capabilities",
  "lorem ipsum dolor sit amet, consectetur adipiscing elit",
];
const Home = () => {
  return (
    <section className="flex flex-col gap-10">
      <Navbar />
      <div className="flex flex-col gap-20">
        <div className=" text-center mx-auto md:w-1/3">
          <p className="font-grace text-green text-2xl">Success stories</p>
          <p className="text-4xl ">
            <b>Every success journey we’ve encountered.</b>
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center   gap-20 mb-10 ">
          <div className="  md:w-1/3 relative">
            <img src={Img1} alt="img1" className="max-w-96 mx-auto" />
            <div className="p-3 rounded-lg  bg-white shadow-md  w-40 h-36 flex flex-col gap-3 absolute top-24 md:-left-16 -left-10">
              <p className="text-4xl">40%</p>
              <p className="text-xs">
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>
            <div className="flex-row-center justify-between absolute -bottom-6 w-full">
              <div className="rounded-full w-50 p-3 shadow-lg flex-row-center gap-2 bg-white">
                <div className="rounded-full p-2 bg-shade4">
                  <FaRocket className="text-lg text-green" />
                </div>
                <div className="">
                  <p className="text-lg">10 Days</p>
                  <p className="text-xs">Staff Deployment</p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#002E18] text-white w-40 h-36 flex flex-col gap-3 ">
                <p className="text-4xl">
                  $0.5<span className="text-xs">&nbsp;MILLION</span>
                </p>
                <p className="text-xs">
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <p className="text-3xl  w-80 text-black font-semibold">
                Enhance fortune 50 company’s insights teams research
                capabilities
              </p>
              <span className="">
                {[1, 2, 3].map((_, index) => (
                  <button
                    key={index}
                    className="text-lg text-shade2 hover:text-shade1"
                  >
                    <GoDotFill />
                  </button>
                ))}
              </span>
            </div>
            <NavLink
              to="/"
              className="redirect bg-black text-white  hover:bg-shade1 flex-row-center gap-2 w-fit "
            >
              Explore More{" "}
              <span className="">
                <FaArrowRight />
              </span>
            </NavLink>
          </div>
        </div>
        <div className="bg-[#E8EEE7] rounded-3xl p-10 flex-row-center justify-between">
                <div className="w-1/2 flex flex-col gap-10">
                    <div className="">
                        <p className="text-2xl font-grace text-shade2">What’s on your mind</p>
                        <p className="text-4xl">Ask Questions</p>
                    </div>
                    <img src={Img3} className="w-96"/>
                </div>
                <div className="w-1/2 ">
                    {questions.map((obj,idx)=>
                        <div className="flex flex-col gap-5 my-5">
                            <p className="text-lg   flex-row-center justify-between">{obj?.question}<span><button><AiOutlinePlus/></button></span></p>
                            <hr className=" border-shade2"/>
                        </div>
                    )}
                </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
