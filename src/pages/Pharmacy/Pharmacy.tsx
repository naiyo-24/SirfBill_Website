import { Link } from 'react-router-dom';

const Pharmacy = () => {
  const pharmacyFeatures = [
    {
      icon: '🧾',
      title: 'Fast POS Billing',
      description: 'Generate GST-compliant invoices in under 3 seconds. Supports barcode scanners, thermal printers, and custom invoice formats.',
      bgColor: 'var(--primary-light)',
      color: 'var(--primary)'
    },
    {
      icon: '📦',
      title: 'Smart Inventory',
      description: 'Track stock across racks and shelves. Set minimum stock levels and automatically generate purchase orders when supplies run low.',
      bgColor: '#e0f2fe',
      color: '#0ea5e9'
    },
    {
      icon: '⚠️',
      title: 'Expiry & Batch Alerts',
      description: 'Never let medicines expire on your shelves. Get automated alerts for near-expiry batches and easily manage supplier returns.',
      bgColor: '#fee2e2',
      color: '#ef4444'
    },
    {
      icon: '👥',
      title: 'Customer Management',
      description: 'Maintain detailed purchase histories. Send WhatsApp reminders for chronic prescription refills and build customer loyalty.',
      bgColor: '#f3e8ff',
      color: '#a855f7'
    },
    {
      icon: '💊',
      title: 'Substitute Engine',
      description: 'Instantly find cheaper or alternative salt compositions when a specific brand is out of stock, ensuring you never miss a sale.',
      bgColor: '#fef3c7',
      color: '#f59e0b'
    },
    {
      icon: '📈',
      title: 'Financial Reports',
      description: 'Track daily cash flow, GST filing reports, profit margins by category, and outstanding supplier payments in real-time.',
      bgColor: '#fce7f3',
      color: '#ec4899'
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <span style={{ backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
              Built for Medical Stores
            </div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#0f172a', lineHeight: 1.1 }}>
              Pharmacy POS & <span style={{ color: 'var(--primary)' }}>Billing</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
              The most advanced, easy-to-use billing and inventory software designed specifically for retail pharmacies and medical stores in India.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/demo" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.05rem', borderRadius: '50px' }}>
                Book Pharmacy Demo →
              </Link>
              <Link to="/pricing" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.05rem', borderRadius: '50px', border: '1px solid var(--border)', backgroundColor: 'white', color: '#1e293b', fontWeight: 600 }}>
                View Pricing
              </Link>
            </div>
          </div>
          <div style={{ flex: '1.2 1 450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src="/images/POS.png" 
              alt="Pharmacy POS Dashboard" 
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>Everything you need to scale</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Stop using outdated generic billing software. SirfBill is tailored for the complexities of the pharma supply chain.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {pharmacyFeatures.map((feature, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
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
                  marginBottom: '1.5rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1e293b' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#0f172a', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Take Control of Your Medical Store</h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Join 10,000+ pharmacies that trust SirfBill for their daily operations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/pricing" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px' }}>
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pharmacy;
