import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom';
import { assets } from '@/assets/assets';

const BottomBanner = () => {
    const navigate = useNavigate();
  return (
    <div className='flex bg-black rounded-lg shadow-2xl  sm:px-10 md:px-14 lg:px-20 my-20  '>
        {/* Left side */}
        <div className='flex-1 py-8 sm:py-16 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-4'>
            <p>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
            </div>
            <Button onClick={() =>{ navigate("/login"), scroll(0,0)}} variant={"primary"} className=' py-3'>Create Account</Button>
        </div>
        {/* Right Side */}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default BottomBanner