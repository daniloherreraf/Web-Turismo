import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Cards from "./Components/Cards/Cards"
import Tour from "./Components/Tours/Tour"
import Discount from "./Components/Discount/Discount"
import Review from "./Components/Review/Review"
import Staff from "./Components/Staff/Staff"
import Footer from "./Components/Footer/Footer"



const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cards/>
      <Tour/>
      <Discount/>
      <Review/>
      <Staff/>
      <Footer/>
    </div>
  )
}

export default App