import { assets } from '@/assets/assets'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Contact = () => {
  return (
     <div className="flex flex-col items-center gap-4 mb-16 dark:bg-card mt-24">
      <h2 className="text-3xl font-semibold text-primary">
      
        CONTACT <span>US</span>
      </h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 mt-8">
        <img
          src={assets.contact_image}
          alt="Doctors"
          className="w-full md:w-1/3 rounded shadow-lg object-cover"
        />
        <div>
          <div className="flex flex-col gap-4 text-foreground dark:text-card-foreground">
          <h3 className='text-2xl font-semibold'>OUR OFFICE</h3>
          <p className="text-sm sm:text-base text-muted">
          123 Main Street, City, Country<br />
          Phone: 123-456-7890<br />
          Email: 6x2YV@example.com
          </p>
          <h3 className='text-2xl font-semibold'>CAREERS AT PRESCRIPTO</h3>
          <p>Learn more about our teams and job openings.</p>
        </div>
        <Button variant={'outline'} className='px-10 py-3 mt-4 '>Explore Job</Button>
        </div>
      </div>
    </div>
  )
}

export default Contact