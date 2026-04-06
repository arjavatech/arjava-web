import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import OurServices from '@/pages/OurServices'
import OurProducts from '@/pages/OurProducts'
import ContactUs from '@/pages/ContactUs'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import PrivacyPolicyPage2 from './pages/PrivacyPolicyPage2'
import PrivacyPolicyPage3 from './pages/PrivacyPolicyPaga3'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/about"          element={<AboutUs />} />
        <Route path="/services"       element={<OurServices />} />
        <Route path="/products"       element={<OurProducts />} />
        <Route path="/contact"        element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage3 />} />
        <Route path="/privacy-policy-page" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy-page2" element={<PrivacyPolicyPage2 />} />
        <Route path="/privacy-policy-page3" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}
