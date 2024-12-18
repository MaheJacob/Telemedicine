import React from 'react'
import {Route, Routes,} from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Myprofile from './Pages/Myprofile'
import MyAppointment from './Pages/MyAppointment'
import Appointments from './Pages/Appointments'
import Navbar from './Components/navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/doctors" element={<Doctors/>}/>
   <Route path="/doctors:speciality" element={<Doctors/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/my-profile" element={<Myprofile/>}/>
   <Route path="/my-appoinment" element={<MyAppointment/>}/>
   <Route path="/appointments/:docId" element={<Appointments/>}/>
  </Routes>
  <Footer/>
    </div>
  )
}

export default App

