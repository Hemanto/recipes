import React from 'react'
import Filter from '../Components/Filter'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Search from '../Components/Search'
import CatDetails from '../Layouts/CatDetails'


const Home = () => {
    return (
        <div>
          <Nav/>  
          <Search/>
          <Filter/>
          <div className='displyrep'>
          <CatDetails/>
          <CatDetails/>
          <CatDetails/>
          <CatDetails/>
          <CatDetails/>
          </div>
          <Footer/>
        </div>
    )
}

export default Home
