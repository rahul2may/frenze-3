import React from 'react'
import Service from './Service'
import About from './About'
import Booking from './Booking'
import Team from './Team'
import Testimonial from './Testimonial'
import ServicePart2 from './ServicePart2'
import Fact from './Fact'
import Carousel from './Carousel'
import Layout from '../Common/Layout'
const Home = () => {
  return (
    <>
   <Layout title={'Sing in Page'}>
        <Carousel />
        <Service />
        <About />
        <Fact />
        <ServicePart2 />
        <Booking />
        <Team />
        <Testimonial />
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
        </Layout>
    </>
  )
}

export default Home