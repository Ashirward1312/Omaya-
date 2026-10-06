import Hero from './Hero/Hero'
import Header from './Header/Header'
import './index.css'
import Services from './Services/Services'
import About from './About/About'
import RentSale from './Sales/Sales'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <Header />

      {/* Home / Hero */}
      <div id="home">
        <Hero />
      </div>

      
      {/* About section */}
      <div id="about">
        <About />
      </div>

      {/* Suites section — Services is the suites/amenities content */}
      <div id="suites">
        <Services />
      </div>


      {/* Amenities anchor (points to suites area – smooth link) */}
      <div id="amenities">
        <RentSale />
      </div>

      {/* Contact section */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  )
}

export default App
