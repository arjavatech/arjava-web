import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import OurServices from '@/pages/OurServices'
import OurProducts from '@/pages/OurProducts'
import ContactUs from '@/pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/about"          element={<AboutUs />} />
        <Route path="/services"       element={<OurServices />} />
        <Route path="/products"       element={<OurProducts />} />
        <Route path="/contact"        element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />        
      </Routes>
    </BrowserRouter>
  )
}
