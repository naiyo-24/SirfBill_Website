
import HeroSection from '../../components/home/HeroSection';
import StatsSection from '../../components/home/StatsSection';
import CoreFeaturesSection from '../../components/home/CoreFeaturesSection';
import ModulePreviewSection from '../../components/home/ModulePreviewSection';
import BenefitsSection from '../../components/home/BenefitsSection';
import PricingPreviewSection from '../../components/home/PricingPreviewSection';
import AboutPreviewSection from '../../components/home/AboutPreviewSection';
import ContactPreviewSection from '../../components/home/ContactPreviewSection';
import FinalCTASection from '../../components/home/FinalCTASection';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <HeroSection />
      <StatsSection />
      <CoreFeaturesSection />
      
      <ModulePreviewSection 
        badgeText="Built for Medical Stores"
        titlePart1="Pharmacy POS &"
        titleHighlight="Medicine Billing"
        description="The most advanced, easy-to-use billing and inventory software designed specifically for retail pharmacies and medical stores in India."
        features={[
          { icon: '🧾', title: 'Fast POS Billing', desc: 'Generate GST-compliant invoices in under 3 seconds with barcode support.' },
          { icon: '⚠️', title: 'Expiry & Batch Alerts', desc: 'Automated alerts for near-expiry batches and effortless supplier returns.' }
        ]}
        linkTo="/pharmacy"
        linkText="Explore Pharmacy Module →"
        imageSrc="/images/POS.png"
        themeColor="var(--primary)"
        themeBgColor="var(--primary-light)"
        imagePosition="right"
        sectionBgColor="#f0fdf4"
      />

      <ModulePreviewSection 
        badgeText="Built for Restaurants & Food Businesses"
        titlePart1="Restaurant POS &"
        titleHighlight="KOT Billing"
        description="Speed up your dining floor and kitchen. Real-time table status, instant thermal KOT dispatch, recipe inventory, and split checkout."
        features={[
          { icon: '🍽️', title: 'Table & Floor Map', desc: 'Visual live table map with occupied, vacant, and billing status in real-time.' },
          { icon: '🔥', title: 'Instant KOT Dispatch', desc: 'Direct thermal print to kitchen stations with customized dish notes and modifiers.' }
        ]}
        linkTo="/restaurant"
        linkText="Explore Restaurant Module →"
        imageSrc="/images/restaurant_pos.jpg"
        themeColor="#d97706"
        themeBgColor="#fef3c7"
        imagePosition="left"
        sectionBgColor="#fffbeb"
      />

      <ModulePreviewSection 
        badgeText="Built for Custom & Enterprise Workflows"
        titlePart1="Tailor-Made"
        titleHighlight="Custom Billing"
        description="Have specific invoice layouts, custom fields, or specialized trade tax rules? We customize SirfBill to match your exact business operational model."
        features={[
          { icon: '🎨', title: 'Drag-and-Drop Invoice Designer', desc: 'Custom formats for A4, A5, and thermal printers with custom QR codes and branding.' },
          { icon: '⚙️', title: 'Configurable Fields & APIs', desc: 'Track IMEI, warranty, batch numbers, and integrate seamlessly with your ERP systems.' }
        ]}
        linkTo="/custom-billing"
        linkText="Explore Custom Solutions →"
        imageSrc="/images/custom_billing.jpg"
        themeColor="#9333ea"
        themeBgColor="#f3e8ff"
        imagePosition="right"
        sectionBgColor="#faf5ff"
      />

      <ModulePreviewSection 
        badgeText="Built for Polyclinics & Diagnostics"
        titlePart1="Clinic & Lab"
        titleHighlight="Diagnostics EMR"
        description="A complete patient management and pathology diagnostic system. Manage doctor schedules, digital prescriptions, and lab test reports."
        features={[
          { icon: '📅', title: 'Appointments & Digital Rx', desc: 'Easy patient scheduling, electronic prescriptions, and auto-reminders.' },
          { icon: '🔬', title: 'Smart Diagnostic Reports', desc: 'Generate branded lab reports with machine integration and zero data entry errors.' }
        ]}
        linkTo="/crm"
        linkText="Explore Healthcare Suite →"
        imageSrc="/images/CLINIC.png"
        themeColor="#0ea5e9"
        themeBgColor="#e0f2fe"
        imagePosition="left"
        sectionBgColor="#f8fafc"
      />

      <BenefitsSection />
      <PricingPreviewSection />
      <AboutPreviewSection />
      <ContactPreviewSection />
      <FinalCTASection />
    </div>
  );
};

export default Home;
