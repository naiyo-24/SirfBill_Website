import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Pharmacy from './pages/Pharmacy/Pharmacy';
import Restaurant from './pages/Restaurant/Restaurant';
import CustomBilling from './pages/CustomBilling/CustomBilling';
import CRM from './pages/CRM/CRM';
import Lab from './pages/Lab/Lab';
import Pricing from './pages/Pricing/Pricing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import Refund from './pages/Refund/Refund';
import Security from './pages/Security/Security';
import AccountDeletion from './pages/AccountDeletion/AccountDeletion';
import NotFound from './pages/NotFound/NotFound';
import Demo from './pages/Demo/Demo';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="custom-billing" element={<CustomBilling />} />
        <Route path="crm" element={<CRM />} />
        <Route path="lab" element={<Lab />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="demo" element={<Demo />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="refund" element={<Refund />} />
        <Route path="security" element={<Security />} />
        <Route path="account-deletion" element={<AccountDeletion />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
