import React from "react";
import { assets } from "@/assets/assets";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-16 dark:bg-card ">
      <h2 className="text-3xl font-semibold text-primary">
      
        About<span>Us</span>
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src={assets.about_image}
          alt="Doctors"
          className="w-full md:w-1/3 rounded-xl shadow-lg object-cover"
        />
        <div className="md:w-1/2 flex flex-col gap-4 text-foreground dark:text-card-foreground">
          <p className="text-sm sm:text-base text-muted">
            Welcome to Prescripto, Your Trusted Partner In Managing Your
            Healthcare Needs Conveniently And Efficiently. At Prescripto, We
            Understand The Challenges Individuals Face When It Comes To
            Scheduling Doctor Appointments And Managing Their Health Records.
          </p>
          <p className="text-sm sm:text-base text-muted">
            Prescripto Is Committed To Excellence In Healthcare Technology. We
            Continuously Strive To Enhance Our Platform, Integrating The Latest
            Advancements To Improve User Experience And Deliver Superior
            Service. Whether You're Booking Your First Appointment Or Managing
            Ongoing Care, Prescripto Is Here To Support You Every Step Of The
            Way.
          </p>
          <h3 className="font-semibold mt-2">Our Vision</h3>
          <p className="text-sm sm:text-base text-muted">
            Our Vision At Prescripto Is To Create A Seamless Healthcare
            Experience For Every User. We Aim To Bridge The Gap Between Patients
            And Healthcare Providers, Making It Easier For You To Access The
            Care You Need, When You Need It.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Why <span className="text-primary">Choose Us</span>
        </h2>
    <div className="max-w-7xl mx-auto mt-16 border  dark:border-card rounded-lg overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-3">
    <Card className="p-6 py-20 space-y-4 rounded-none shadow-none border-b md:border-b-0 md:border-r border-border dark:border-card last:border-r-0">
      <CardHeader >
        <CardTitle className="text-primary text-sm md:text-base font-semibold">
          EFFICIENCY:
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted">
        Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.
      </CardContent>
    </Card>

    <Card className="p-6 py-20 space-y-4 rounded-none shadow-none border-b md:border-b-0 md:border-r border-border dark:border-card last:border-r-0">
      <CardHeader>
        <CardTitle className="text-primary text-sm md:text-base font-semibold">
          CONVENIENCE:
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted">
        Access To A Network Of Trusted Healthcare Professionals In Your Area.
      </CardContent>
    </Card>

    <Card className="p-6 py-20 space-y-4 rounded-none shadow-none border-b md:border-b-0 md:border-r border-border dark:border-card last:border-r-0">
      <CardHeader>
        <CardTitle className="text-primary text-sm md:text-base font-semibold">
          PERSONALIZATION:
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted">
        Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.
      </CardContent>
    </Card>
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
