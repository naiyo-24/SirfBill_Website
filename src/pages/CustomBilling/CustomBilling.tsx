import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const customFeatures = [
  {
    icon: '🎨',
    title: 'Custom Invoice & Receipt Designer',
    description: 'Design brand-aligned invoices with custom logos, QR codes, watermarks, dynamic payment links, and tailored header/footer disclaimers. Supports A4, A5, 3-inch, and 2-inch thermal prints.',
    bgColor: '#f3e8ff',
    color: '#9333ea'
  },
  {
    icon: '⚙️',
    title: 'Configurable Fields & Data Attributes',
    description: 'Add tailor-made fields for your products and customers — such as IMEI numbers, chassis codes, batch numbers, delivery dates, warranty periods, and custom serial identifiers.',
    bgColor: '#e0f2fe',
    color: '#0284c7'
  },
  {
    icon: '🧮',
    title: 'Tailored Tax & Pricing Logic',
    description: 'Configure multi-tier GST rates, cess, automated wholesale slabs, volume-based discounts, trade schemes, and multi-currency billing tailored to your unique trade agreements.',
    bgColor: '#fef3c7',
    color: '#d97706'
  },
  {
    icon: '🔌',
    title: 'API & ERP System Integration',
    description: 'Seamlessly link SirfBill with your existing ERP, accounting packages (Tally, Zoho, SAP), CRM, e-commerce storefronts, or proprietary backends via high-speed REST APIs & webhooks.',
    bgColor: '#fee2e2',
    color: '#ef4444'
  },
  {
    icon: '🔐',
    title: 'Role-Based Approval Workflows',
    description: 'Set granular permissions and multi-level approval hierarchies for staff. Restrict discounts, control bill cancellations, and enforce supervisor overrides with complete audit logs.',
    bgColor: 'var(--primary-light)',
    color: 'var(--primary)'
  },
  {
    icon: '🛠️',
    title: 'On-Demand Custom Feature Engineering',
    description: 'Need a custom module, proprietary hardware driver, or specialized government compliance report? Our dedicated engineering team builds and maintains custom modules for your enterprise.',
    bgColor: '#ecfdf5',
    color: '#059669'
  }
];

const industries = [
  { icon: '🏬', name: 'Retail & Supermarkets', desc: 'Fast barcodes, loyalty programs, weighing scale sync, and quick tenders.' },
  { icon: '📱', name: 'Electronics & Mobiles', desc: 'IMEI & serial number tracking, warranty logging, and brand reports.' },
  { icon: '👕', name: 'Apparel & Footwear', desc: 'Size-color-style matrix, barcode tags, and season collection management.' },
  { icon: '🏗️', name: 'Hardware & Sanitary', desc: 'Unit conversions (sq.ft, kg, meters), wholesale pricing slabs, and contractor credit.' },
  { icon: '📦', name: 'Wholesale & Distribution', desc: 'Route-wise delivery bills, party-wise ledgers, and bulk GST dispatch.' },
  { icon: '🏢', name: 'Enterprises & Franchises', desc: 'Centralized master data, franchise royalty tracking, and consolidated audits.' }
];

const CustomBilling = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <section style={{ padding: '5.5rem 0 4rem', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3.5rem' }}>
          
          <div style={{ flex: '1 1 500px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#f3e8ff', color: '#6b21a8', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.25rem' }}
            >
              <span style={{ backgroundColor: '#9333ea', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
              Tailored Billing & Workflow Engineering
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: '3.4rem', marginBottom: '1.25rem', color: '#0f172a', lineHeight: 1.12, letterSpacing: '-0.5px' }}
            >
              Customized <span style={{ color: '#9333ea' }}>Billing Software</span> Built for Your Exact Needs
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}
            >
              No two businesses operate identically. SirfBill provides a fully customizable billing architecture — from custom invoice layouts and bespoke tax/discount rules to specialized inventory attributes and custom ERP integrations.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link to="/contact" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.05rem', borderRadius: '50px', backgroundColor: '#9333ea', color: 'white', fontWeight: 700, boxShadow: '0 4px 14px rgba(147, 51, 234, 0.35)' }}>
                Request Custom Solution →
              </Link>
              <Link to="/demo" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.05rem', borderRadius: '50px', border: '1px solid var(--border)', backgroundColor: 'white', color: '#1e293b', fontWeight: 600 }}>
                Schedule Architecture Call
              </Link>
            </motion.div>

            {/* Quick stats badges */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Configurable Layouts</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>REST APIs</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Bi-Directional Sync</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Dedicated</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Solutions Engineer</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div style={{ flex: '1.2 1 480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ width: '100%', position: 'relative' }}
            >
              <img 
                src="/images/custom_billing.jpg" 
                alt="Customized Billing Software Interface" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '18px', 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  display: 'block',
                  border: '1px solid rgba(0,0,0,0.08)'
                }} 
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '-15px', 
                left: '20px', 
                backgroundColor: 'white', 
                padding: '0.85rem 1.25rem', 
                borderRadius: '12px', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '1px solid #f1f5f9'
              }}>
                <span style={{ fontSize: '1.5rem' }}>⚡</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>Dynamic Field Engine</div>
                  <div style={{ fontSize: '0.75rem', color: '#9333ea', fontWeight: 600 }}>Custom Attributes & Templates Ready</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Industries Served */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '0.5rem' }}>Customized for Diverse Verticals</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>See how businesses across retail, wholesale, and services adapt SirfBill to their requirements.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {industries.map((ind, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '12px', 
                border: '1px solid var(--border)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ fontSize: '2rem' }}>{ind.icon}</div>
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 700, margin: 0 }}>{ind.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Features Grid */}
      <section style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>Engineered for Total Flexibility</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
              Say goodbye to rigid, one-size-fits-all software that slows your team down. Adapt SirfBill to your business logic.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {customFeatures.map((feature, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '2.25rem' }}>
                <div style={{ 
                  backgroundColor: feature.bgColor, 
                  color: feature.color, 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.75rem',
                  marginBottom: '1.25rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1e293b' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Workflow Customization Process */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f1f5f9', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', color: '#0f172a', marginBottom: '0.75rem' }}>How We Tailor SirfBill For You</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>A simple 4-step deployment process to get your custom billing software running seamlessly.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Workflow Discovery', desc: 'We analyze your billing lifecycle, required fields, printer formats, and hardware.' },
              { step: '02', title: 'System Configuration', desc: 'Our team customizes your invoice designer, tax slabs, discount tables, and user privileges.' },
              { step: '03', title: 'Data Migration & Testing', desc: 'We safely migrate your master catalog, party balances, and test under peak transaction volume.' },
              { step: '04', title: 'Go Live & Dedicated Support', desc: 'Smooth launch with continuous on-call support and custom feature enhancements.' }
            ].map((s, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)', position: 'relative' }}>
                <div style={{ fontSize: '2.25rem', fontWeight: 900, color: '#9333ea', opacity: 0.35, marginBottom: '0.5rem' }}>{s.step}</div>
                <h4 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '0.5rem', fontWeight: 700 }}>{s.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#0f172a', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'white' }}>Have a Unique Billing Requirement?</h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2.25rem', maxWidth: '600px', margin: '0 auto 2.25rem' }}>
            Tell us about your business model. Our engineers will craft the ideal billing workflow for you.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', backgroundColor: '#9333ea', borderColor: '#9333ea' }}>
              Request Custom Consultation
            </Link>
            <Link to="/demo" className="btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', backgroundColor: 'transparent', border: '1px solid #475569', color: 'white' }}>
              Explore Live Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomBilling;
