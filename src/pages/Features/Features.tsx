 import { Link } from 'react-router-dom';

const features = [
  {
    icon: '💊',
    title: 'Pharmacy POS & Medicine Billing',
    description: 'Lightning-fast GST-ready billing. Batch and expiry management, salt composition substitute suggestions, and automated supplier returns.',
    color: 'var(--primary)',
    bgColor: 'var(--primary-light)'
  },
  {
    icon: '🍽️',
    title: 'Restaurant POS, Tables & KOT',
    description: 'Visual table management floor plans, instant kitchen thermal KOT printing, split billing, recipe-level raw ingredient tracking, and takeaway mode.',
    color: '#d97706',
    bgColor: '#fef3c7'
  },
  {
    icon: '⚙️',
    title: 'Customized Billing & Invoicing Engine',
    description: 'Tailor-made invoice templates (A4, A5, thermal), custom product attributes (IMEI, warranty, batch), custom tax rules, and enterprise API integrations.',
    color: '#9333ea',
    bgColor: '#f3e8ff'
  },
  {
    icon: '📦',
    title: 'Smart Inventory & Batch Tracking',
    description: 'Never lose track of your stock. Real-time expiry alerts, automated purchase orders, ingredient deduction, and multi-warehouse transfers.',
    color: '#0ea5e9',
    bgColor: '#e0f2fe'
  },
  {
    icon: '📊',
    title: 'GST Reports & Financial Intelligence',
    description: 'Comprehensive business insights. Instant GSTR-1/3B reports, category-wise profit margins, outstanding ledger balances, and cashier shift audits.',
    color: '#ef4444',
    bgColor: '#fee2e2'
  },
  {
    icon: '🏪',
    title: 'Multi-Store & Centralized Chain Control',
    description: 'Expand your business across branches. Control central master pricing, transfer stock between locations, and view consolidated reports.',
    color: '#10b981',
    bgColor: '#d1fae5'
  }
];

const Features = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Header */}
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#0f172a' }}>
            Powerful Billing Features for<br />
            <span style={{ color: 'var(--primary)' }}>Pharmacy, Restaurant & Custom Businesses</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
            The ultimate billing engine with specialized modules for retail pharmacies, high-volume food outlets, and fully tailored custom enterprise workflows.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'var(--surface)', 
                borderRadius: '16px', 
                padding: '2.5rem 2rem',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
              }}
              >
                <div style={{ 
                  backgroundColor: feature.bgColor, 
                  color: feature.color, 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '2rem',
                  marginBottom: '1.5rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1e293b' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--primary-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Ready to transform your billing?</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            Join thousands of satisfied pharmacies, restaurants, and growing enterprises who trust SirfBill to power their daily billing operations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-dark)', padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', fontWeight: 700 }}>
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
