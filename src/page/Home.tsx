import  { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Img1 from "../../public/assets/Img1.png";
import Img3 from "../../public/assets/Img3.png";
import { AiOutlinePlus } from "react-icons/ai";
import questions from "../../public/json/question.json";

import { FaRocket } from "react-icons/fa";
import CarouselTimeout from "./components/CarouselTimeout";

const features = [
  "Enhance fortune 50 company’s insights teams research capabilities",
  "Elevate the research prowess of Fortune 50 giants ",
  "Optimize Fortune 50 corporation's research workflows",
];

const Home = () => {

  const [curFeature, setCurFeature] = useState(0);
  const [curQuery, setCurQuery] = useState(-1);

  return (
    <section className="flex flex-col gap-10 ">
      <Navbar />
      <div className="flex flex-col gap-20 ">
        <div className=" text-center mx-auto md:w-1/3">
          <p className="font-grace text-green text-2xl">Success stories</p>
          <p className="md:text-4xl text-3xl font-semibold">
            Every success journey we’ve encountered.
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center   gap-20 mb-10 ">
          <div className="  md:w-1/3 relative">
            <img src={Img1} alt="img1" className="max-w-96 mx-auto" />
            <div className="p-3 rounded-lg  bg-white shadow-md  w-40 h-36 flex flex-col gap-3 absolute top-24 md:-left-16 -left-10">
              <p className="text-4xl">40%</p>
              <p className="text-xs font-semibold">
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
              <p className="text-3xl  md:w-80   text-black font-semibold md:h-36 h-28">
                {features[curFeature]}
              </p>
              <span className="flex gap-3">
                <CarouselTimeout
                  nsets={3}
                  setCurFeature={setCurFeature}
                  curFeature={curFeature}
                />
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
        <div className="bg-[#E8EEE7] rounded-3xl p-10 flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-1/2 flex flex-col gap-10">
            <div className="relative md:translate-x-10">
              <p className="text-2xl font-grace text-shade2">
                What’s on your mind
              </p>
              <p className="text-4xl">Ask Questions</p>
            </div>
            <img src={Img3} className="w-96 hidden md:block" />
          </div>
          <div className="md:w-1/2">
            {questions.map((obj, idx) => (
              <div className="flex flex-col gap-5 my-5" key={idx}>
                <p className="text-lg flex-row-center justify-between">
                  {obj?.question}
                  <span>
                    <button onClick={() => {
                      if(curQuery===idx){
                        setCurQuery(-1)
                      }
                      else{
                        setCurQuery(idx)
                      }
                      }}>
                      <AiOutlinePlus />
                    </button>
                  </span>
                </p>
                <p className={`text-lg text-shade1  ${idx===curQuery?'':'hidden'}`}>{obj?.answer}</p>
                <hr className="border-shade2" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
