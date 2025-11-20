import React from "react";
import { Card, CardAction } from "./ui/card";

const DoctorCard = ({ item, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className="flex flex-col overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-transform duration-500 border border-gray-600 rounded-lg"
    >
      <img className="bg-gray-950 object-cover" src={item.image} alt={item.name} />

      <CardAction className="p-4">
        <div className="flex items-center gap-2 text-sm text-green-500">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <p>Available</p>
        </div>

        <p className="text-lg font-medium mt-2">{item.name}</p>
        <p className="text-sm text-muted-foreground">{item.speciality}</p>
      </CardAction>
    </Card>
  );
};

export default DoctorCard;
