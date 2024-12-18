import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. James',
    image: '/Images/doct 1.jpg',
    email: 'd.james@gmail.com',
    speciality: 'General Physician',
    availability: 'Mon - Fri 10:00-12:00am',
    contact: '+254789467236',
  },
  {
    _id: 'doc2',
    name: 'Dr. Sarah',
    image: '/Images/doct2.jpg',
    email: 's.smith@gmail.com',
    speciality: 'Gastroentologist',
    availability: 'Mon - Fri 10:00-12:00am',
    contact: '+254789467236',
  },
  {
    _id: 'doc3',
    name: 'Dr. Emily',
    image: '/Images/doct3.jpg',
    email: 'e.emily@gmail.com',
    speciality: 'Gynecologist',
    availability: 'Mon - Fri 10:00-12:00am',
    contact: '+254789467236',
  },
  {
    _id: 'doc4',
    name: 'Dr. Cate',
    image: '/Images/doct3.jpg',
    email: 'c.cate@gmail.com',
    speciality: 'Pediatricians',
    availability: 'Mon - Fri 10:00-12:00am',
    contact: '+254789467236',
  },
  {
    _id: 'doc4',
    name: 'Dr. Jarred',
    image: '/Images/doct3.jpg',
    email: 'j.jarred@gmail.com',
    speciality: 'Gastroentologist',
    availability: 'Mon - Fri 10:00-12:00am',
    contact: '+254789467236',
  },
  // Add other doctor objects here, ensuring all use `_id`.
];





 const Doctors = () => {
   const { speciality } = useParams();

   // Filter doctors based on speciality if provided
   const filteredDoctors = speciality
     ? doctors.filter((doc) => doc.speciality.toLowerCase() === speciality.toLowerCase())
     : doctors;

  return (
    <div className="p-6">
      <p className="text-lg font-semibold mb-4">Search through the doctors' specialities:</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {['General Physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroentologist'].map(
          (spec, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-secondary text-white rounded hover:bg-primary"
              onClick={() => console.log(`Filter by: ${spec}`)}
            >
              {spec}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((item) => (
          <div key={item._id} className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
            <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
            <div className="p-4">
              <div className="flex items-center gap-2 text-green-500 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available</span>
              </div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-700">{item.speciality}</p>
              <p className="text-gray-500">{item.contact}</p>
              <p className="text-gray-500">{item.email}</p>
              <p className="text-gray-500">{item.availability}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;

// import React, { useContext, useState } from 'react'
// import {useParams} from 'react-router-dom'

// const doctors = [


//   {
//     _id: 'doc1',
//     name: 'Dr James',
//     image: '/Images/doct 1.jpg',
//     email: 'd.james@gmail.com',
//     speciality: 'General Physician',
//     availability: 'mon - fri 10:00-12:00am',
//     contact: '+2547894672365'
//   },

//   {
//     _id: 'doc2',
//     name: 'Dr James',
//     image: '/Images/doct 1.jpg',
//     email: 'd.james@gmail.com',
//     speciality: 'Gastroentologist',
//     availability: 'mon - fri 10:00-12:00am',
//     contact: '+2547894672365'
//   },

//   {
//     id: 'doc3',
//     name: 'Dr James',
//     image: '/Images/doct 1.jpg',
//     email: 'd.james@gmail.com',
//     speciality: 'Gynecologist',
//     availability: 'mon - fri 10:00-12:00am',
//     contact: '+2547894672365'
//   },

//   {
//     id: 'doc4',
//     name: 'Dr James',
//     image: '/Images/doct 1.jpg',
//     email: 'd.james@gmail.com',
//     speciality: 'Pediatricians',
//     availability: 'mon - fri 10:00-12:00am',
//     contact: '+2547894672365'
//   },

//   {
//     id: 'doc5',
//     name: 'Dr James',
//     image: '/Images/doct 1.jpg',
//     email: 'd.james@gmail.com',
//     speciality: 'General Physitian',
//     availability: 'mon - fri 10:00-12:00am',
//     contact: '+2547894672365'
//   },

//   {
//     id: 'doc6',
//     name: 'Dr James',
//     image: '/Images/doct 1.jpg',
//     email: 'd.james@gmail.com',
//     speciality: 'Pediatricians',
//     availability: 'mon - fri 10:00-12:00am',
//     contact: '+2547894672365'
//   },

//   {
//     id: 'doc7',
//     name: 'Dr James',
//     image: '/Images/doct 1.jpg',
//     email: 'd.james@gmail.com',
//     speciality: 'Neurologist',
//     availability: 'mon - fri 10:00-12:00am',
//     contact: '+2547894672365'
//   },

//   {
//     id: 'doc8',
//     name: 'Dr James',
//     image: '/Images/doct 1.jpg',
//     email: 'd.james@gmail.com',
//     speciality: 'Dermatologist',
//     availability: 'mon - fri 10:00-12:00am',
//     contact: '+2547894672365'
//   },
// ]
// const Doctors = () => {
//   const {speciality} = useParams();
  
//   const [filterDoc, setFilterDoc] = useState([])
//   return (
//     <div className=' '>
//       <p>Search through the doctors speciality</p>

//     <div>
//       <p>General Physician</p>
//       <p>Gynecologist</p>
//       <p>Dermatologist</p>
//       <p>Pediatricians</p>
//       <p>Neurologist</p>
//       <p>Gastroentologist</p>
//     </div>

//     <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
//   {doctors.map((item, index) => (
//     <div key={index}>
//       <div className='border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
//         <img className='bg-blue-50' src={item.image} alt='' />
//       </div>

//       <div className='p-4'>
//       <div className='flex items-center gap-2 text-sm text-green-500'>
//         <p className='w-2 h-2 bg-green-500 rounded-full'><p></p>Available</p>
//         </div>
//         <p>{item.name}</p>
//         <p>{item.speciality}</p>
//         <p>{item.contact}</p>
//         <p>{item.email}</p>
//         <p>{item.availability}</p>
     
//       </div>
//     </div>
//   ))}
// </div>
//     </div>
//   )
// }

// export default Doctors
