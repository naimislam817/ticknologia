import React from 'react'
import Hero from '../Components/Hero/Hero.jsx'
import NewArrivals from '../Components/NewArrivals/NewArrivals.jsx'
import BestSelling from '../Components/BestSelling/BestSelling.jsx'
function Home() {
  return (
    <div>
         <Hero/>
          <NewArrivals/>
          <BestSelling/>
         
    </div>
  )
}
export default Home;