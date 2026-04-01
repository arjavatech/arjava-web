import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import OurServices from '@/pages/OurServices'
import OurProducts from '@/pages/OurProducts'
import ContactUs from '@/pages/ContactUs'
import PrivacyPolicy from '@/pages/PrivacyPolicy'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"               element={<Home />} />
        <Route path="/about"          element={<AboutUs />} />
        <Route path="/services"       element={<OurServices />} />
        <Route path="/products"       element={<OurProducts />} />
        <Route path="/contact"        element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
