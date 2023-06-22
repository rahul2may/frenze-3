import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../AllPages/Home'
import Error from '../AllPages/Error'
import Service from '../AllPages/Service'
import Contact from '../AllPages/Contact'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Login from '../AllPages/Login'
import Register from '../AllPages/Register'
import ForgetPassword from '../AllPages/ForgetPassword'
import ServiceSingle from '../AllPages/ServiceSingle'

const MyRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/serviceSingle' element={<ServiceSingle />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default MyRouter