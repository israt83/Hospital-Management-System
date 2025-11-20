

// import React from "react";
// import { doctors } from "@/assets/assets";
// import { Button } from "./ui/button";
// import { Card, CardAction } from "./ui/card";
// import { useNavigate } from "react-router-dom";

// const TopDoctors = () => {
//     const navigate = useNavigate();
//   return (
//     <div className="flex flex-col items-center gap-4 my-16">
//       <h1 className="text-3xl font-medium ">Top Doctors to Book</h1>
//       <p className="sm:w-1/3 text-center text-sm text-gray-300">
//         Find the right specialist for your health needs and book an appointment within minutes.
//       </p>

//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-5 px-3 sm:px-0">
//         {doctors.slice(0, 10).map((item, index) => (
//           <Card
//             key={index}
//             className="flex flex-col overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-transform duration-500 border border-border  rounded-xl "
//           >
//             <img className="bg-gray-950" src={item.image} alt={item.name} />
//             <CardAction className="p-4 ">
//               <div className="flex items-center gap-2 text-sm text-green-500">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                 <p>Available</p>
//               </div>
//               <p className="text-lg font-medium  mt-2">{item.name}</p>
//               <p className="text-sm">{item.speciality}</p>
//             </CardAction>
//           </Card>
//         ))}
//       </div>

    
//  <Button onClick={() => {
//     navigate("/doctors");
//     scroll(0, 0);
//   }} variant={"primary"} className=' py-3 px-16 mt-10'>More</Button>
//     </div>
//   );
// };

// export default TopDoctors;


import React from "react";
import { doctors } from "@/assets/assets";
import { Button } from "./ui/button";
import DoctorCard from "./DoctorCard";
import { useNavigate } from "react-router-dom";

const TopDoctors = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 my-16">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-muted-foreground">
        Find the right specialist for your health needs and book an appointment within minutes.
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <DoctorCard
            key={index}
            item={item}
            onClick={() => {
              navigate(`/doctors/${item.speciality}`);
              scrollTo(0, 0);
            }}
          />
        ))}
      </div>

      <Button
        variant="primary"
        className="py-3 px-16 mt-10"
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
      >
        More
      </Button>
    </div>
  );
};

export default TopDoctors;
