import { assets } from "@/assets/assets";
import React from "react";
import { Button } from "./ui/button";
import { ArrowBigLeft, ArrowBigRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col md:flex-row flex-wrap  rounded-lg px-6 md:px-10 pt-10 bg-[radial-gradient(125%_125%_at_50%_10%,_#000000_40%,_#010133_100%)]">
      {/* Left site */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appoinment <br /> with Trusted Doctors
        </p>
       <div className="flex flex-col md:flex-row items-start md:items-center gap-3 text-white text-sm font-light">
           <img className="w-28 " src={assets.group_profiles} alt="profile" />

        <p>
          Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
          schedule your appointment hassle-free.
        </p>
       </div>
     
     <Button onClick={() => {
         navigate("/doctors");
         scroll(0, 0);
       }} variant={"primary"} className=' py-3'> Book appoinment<ArrowRight className="w-3"/></Button>
      </div>
      {/* right site */}
      <div className="md:w-1/2 relative">
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img } alt="image" />
      </div>
    </div>
  );
};

export default Banner;
