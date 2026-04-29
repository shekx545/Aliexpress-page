import React from 'react'
import HomeCarousel from '../../components/homeCarousel/HomeCarousel';
import CartProducts from "../../components/cartProducts/CartProducts"


const Home = () => {
  return (
    <div className="home-page">
      <HomeCarousel />
      <CartProducts/>
    </div>
  )
}

export default Home