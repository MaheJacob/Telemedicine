import React from 'react';
import { Link } from 'react-router-dom';

  const specialityData =[
    {speciality: 'General Phycisian',
     Image:'/Images/doctor.png'
    },
    {speciality: 'Gynecologist',
     Image:'/Images/woman.png'
    },
    {speciality: 'Dermatologist',
     Image:'/Images/dermatology.png'
    },
    {speciality: 'Pediatricians',
     Image:'/Images/pedi.png'
    },
    {speciality: 'Neurologist',
     Image:'/Images/neurologist.png'
    },
    {speciality: 'Gastroenstrologists',
     Image:'/Images/organ.png'
    },
  
 ]

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-');

 const SpecialityMenu = () => {
  return (
     <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
       <h1 className='text-3xl'>Search by Speciality</h1>
       <p className='sm:1/3 text-center text-sm '>Search through our extensive list of doctors and schedule your appointment </p>
       <div  className='flex sm:justify-center gap-8 pt-5 w-full overflow-scroll'>
         {specialityData.map((item, index)=>(
             <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-sx cursor-pointer flex-shrink-0 hover-translate-y-[-10px] transition-all duration-500 ' key={index} to={`/doctors/${item.speciality}`}>
            <img className='w-16 sm:24 mb-2' src={item.Image} alt="image" />
            <p>{item.speciality}</p>
             </Link>
         ))}
       </div>
     </div>
   )
 }

 export default SpecialityMenu



