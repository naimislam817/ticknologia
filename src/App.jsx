import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Cart from './Pages/Cart.jsx'
import Home from './Pages/Home.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Contactus from './Pages/Contactus.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;