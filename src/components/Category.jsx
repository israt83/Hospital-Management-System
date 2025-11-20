// import React from "react";
// import { specialityData } from "@/assets/assets";
// import { Link } from "react-router-dom";
// import { Card, CardContent } from "./ui/card";

// const Category = () => {
//   return (
//     <div id="categories" className="flex flex-col items-center gap-4 py-16 lg:py-20 lg:mt-10">
//       <h1 className="text-3xl font-medium">Browse Doctors by Speciality</h1>
//       <p className="sm:w-1/3 text-center text-sm">
//         Find the right specialist for your health needs and book an appointment
//         within minutes.
//       </p>
//       <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
//         {specialityData.map((item, index) => (
//           <Link
//             onClick={() => scrollTo(0, 0)}
//             to={`/doctors/${item.speciality}`}
//             key={index}
//           >
//             <Card className="flex flex-col items-center  gap-2 hover:translate-y-[-10px] transition-transform duration-500">
//               <img
//                 className="w-16 sm:w-24"
//                 src={item.image}
//                 alt={item.speciality}
//               />
//               <CardContent className="p-0 text-center">
//                 <p className="text-xs sm:text-sm">{item.speciality}</p>
//               </CardContent>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;
import React from "react";
import { specialityData } from "@/assets/assets";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

const Category = () => {
  return (
    <div id="categories" className="flex flex-col items-center justify-center gap-4 py-16 lg:py-20 lg:mt-10">
      <h1 className="text-2xl md:text-3xl font-medium text-center">Browse Doctors by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm text-muted-foreground">
        Find the right specialist for your health needs and book an appointment within minutes.
      </p>

      <div className="flex sm:justify-center gap-4 pt-5 px-5 lg:px-0 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link key={index} to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)}>
            <Card className="flex flex-col items-center gap-2 hover:translate-y-[-10px] transition-transform duration-500 ">
              <img className="w-16 sm:w-24" src={item.image} alt={item.speciality} />
              <CardContent className="p-0 text-center">
                <p className="text-xs sm:text-sm">{item.speciality}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
