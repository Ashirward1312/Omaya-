import { Routes, Route, useLocation } from "react-router-dom";
import Hero from './Hero/Hero'
import Header from './Header/Header'
import './index.css'
import Services from './Services/Services'
import About from './About/About'
import RentSale from './Sales/Sales'
import Suites from './Gallery/Gallery'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function Home() {
  return (
    <>
      <Hero />
      <div id="suites">
        <RentSale />
      </div>
    </>
  );
}

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/amenities" element={<Services />} />
          <Route path="/suites" element={<Suites />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App
