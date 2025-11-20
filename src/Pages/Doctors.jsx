import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DoctorCard from "@/components/DoctorCard";
import { AppContext } from "@/Context/AppContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Filter } from "lucide-react";

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);

  const [filteredDoc, setFilteredDoc] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  useEffect(() => {
    if (speciality) {
      setFilteredDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilteredDoc(doctors);
    }
  }, [doctors, speciality]);

  const handleCategoryClick = (cat) => {
    setModalOpen(false);
    if (cat === speciality) {
      navigate("/doctors");
    } else {
      navigate(`/doctors/${cat}`);
    }
  };

  return (
    <div className="py-10 px-4 md:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-lg font-medium flex items-center gap-2">
          Browse through the doctors specialist
        </p>

        {/* Mobile Filter Icon */}
        <div className="md:hidden ">
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="p-2 py-3">
                <Filter className="w-5 h-5" />
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[400px] w-[90vw] p-6 rounded-lg bg-gray-950">
              <DialogHeader>
                <DialogTitle>Choose Category</DialogTitle>
                <DialogDescription>
                  Select a speciality to filter the doctors list.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-3 mt-4">
                {categories.map((cat, idx) => (
                  <Button
                    key={idx}
                    variant={cat === speciality ? "primary" : "outline"}
                    className="w-full justify-start"
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>

              <div className="mt-6">
                <DialogClose asChild>
                  <Button variant="primary" className="w-full">
                    Cancel
                  </Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Desktop Categories */}
        <div className="hidden md:flex flex-col gap-4 text-sm w-[200px]">
          {categories.map((cat, idx) => (
            <p
              key={idx}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-2 border text-center text-base font-semibold rounded border-blue-700 cursor-pointer transition-all
                ${
                  speciality === cat
                    ? "bg-primary text-white "
                    : "border-gray-700 hover:bg-primary dark:hover:bg-gray-800"
                }`}
            >
              {cat}
            </p>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {filteredDoc.map((item, idx) => (
            <DoctorCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
