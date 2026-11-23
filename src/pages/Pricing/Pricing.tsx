import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: 'Pharmacy Edition',
    price: '2500',
    description: 'Specialized for retail medical stores, chemists, and pharmacies.',
    features: [
      'GST Ready Medicine Billing',
      'Batch & Expiry Date Tracking',
      'Salt Substitute Suggestion Engine',
      'Automated Supplier Returns',
      'Email & WhatsApp Support'
    ],
    recommended: false,
    color: 'var(--primary)', // green
  },
  {
    name: 'Restaurant Edition',
    price: '3000',
    description: 'Engineered for cafes, dine-in restaurants, and quick service food joints.',
    features: [
      'Table & Floor Management',
      'Instant Kitchen KOT Printing',
      'Split Bill & Multi-Payment',
      'Recipe & Ingredient Inventory',
      'Priority Phone Support'
    ],
    recommended: true,
    color: '#d97706', // amber
  },
  {
    name: 'Custom Enterprise',
    price: '3500',
    description: 'Fully customizable billing software tailored to your specific business logic.',
    features: [
      'Drag-and-Drop Invoice Designer',
      'Custom Fields (IMEI, Warranty, Serials)',
      'Multi-Store & Centralized Sync',
      'REST APIs & ERP Connectors',
      '24/7 Dedicated Account Manager'
    ],
    recommended: false,
    color: '#9333ea', // purple
  }
];

const Pricing = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Header Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            <span style={{ backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
            Transparent Pricing
          </div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#0f172a' }}>
            Choose the Right Edition for<br />
            <span style={{ color: 'var(--primary)' }}>Your Business</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
            No hidden charges. Specialized editions for pharmacies, restaurants, and fully customized business billing.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                style={{ 
                  backgroundColor: 'var(--surface)', 
                  borderRadius: '16px', 
                  padding: '3rem 2rem',
                  border: plan.recommended ? `2px solid ${plan.color}` : '1px solid var(--border)',
                  boxShadow: plan.recommended ? `0 20px 40px -10px ${plan.color}30` : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  transform: plan.recommended ? 'scale(1.05)' : 'scale(1)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  zIndex: plan.recommended ? 2 : 1
                }}
              >
                {plan.recommended && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '-15px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    backgroundColor: plan.color, 
                    color: 'white', 
                    padding: '0.5rem 1.5rem', 
                    borderRadius: '50px', 
                    fontWeight: 'bold', 
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Most Popular
                  </div>
                )}
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1e293b' }}>{plan.name}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', minHeight: '48px' }}>{plan.description}</p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a' }}>₹{plan.price}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>/year</span>
                </div>
                
                <div style={{ flexGrow: 1 }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#334155' }}>
                        <span style={{ color: plan.color, fontWeight: 'bold' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="btn" 
                  style={{ 
                    marginTop: '2.5rem', 
                    width: '100%', 
                    backgroundColor: plan.recommended ? plan.color : 'white', 
                    color: plan.recommended ? 'white' : '#1e293b', 
                    border: plan.recommended ? 'none' : '1px solid var(--border)',
                    padding: '1rem',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    boxShadow: plan.recommended ? `0 4px 14px ${plan.color}40` : 'none'
                  }}
                >
                  Choose {plan.name.split(' ')[1] || 'Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section style={{ padding: '4rem 0 6rem', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Have questions about our pricing?
          </p>
          <Link to="/contact" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem' }}>
            Contact our sales team for a custom quote →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
