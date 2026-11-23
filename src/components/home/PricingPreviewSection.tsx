import { Link } from 'react-router-dom';

const PricingPreviewSection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>Transparent Pricing</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Simple, straightforward pricing tailored for pharmacies, restaurants, and custom businesses.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          {[
            {
              name: 'Pharmacy Edition', price: '2500', desc: 'Specialized for retail medical stores, chemists, and pharmacies.',
              features: ['GST Ready Medicine Billing', 'Batch & Expiry Date Alerts', 'Salt Substitute Suggestions', 'Automated Supplier Returns'], color: 'var(--primary)', recommended: false
            },
            {
              name: 'Restaurant Edition', price: '3000', desc: 'Engineered for cafes, restaurants, and food counters with KOTs.',
              features: ['Table Floor Map Management', 'Instant Kitchen KOT Printing', 'Split Bill & Fast Checkout', 'Recipe & Ingredient Tracking'], color: '#d97706', recommended: true
            },
            {
              name: 'Custom Enterprise', price: '3500', desc: 'Fully customizable billing software tailored to your workflows.',
              features: ['Custom Invoice Template Designer', 'Configurable Product & Custom Fields', 'Multi-Branch Centralized Sync', 'REST APIs & Dedicated Manager'], color: '#9333ea', recommended: false
            }
          ].map((plan, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'var(--surface)', borderRadius: '16px', padding: '3rem 2rem',
              border: plan.recommended ? `2px solid ${plan.color}` : '1px solid var(--border)',
              boxShadow: plan.recommended ? `0 20px 40px -10px ${plan.color}30` : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              transform: plan.recommended ? 'scale(1.05)' : 'scale(1)',
              position: 'relative', display: 'flex', flexDirection: 'column',
              zIndex: plan.recommended ? 2 : 1
            }}>
              {plan.recommended && (
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: plan.color, color: 'white', padding: '0.5rem 1.5rem', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Most Popular
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1e293b' }}>{plan.name}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', minHeight: '48px' }}>{plan.desc}</p>
              
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: '#0f172a' }}>₹{plan.price}</span>
                <span style={{ color: 'var(--text-secondary)' }}>/year</span>
              </div>
              
              <div style={{ flexGrow: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#334155' }}>
                      <span style={{ color: plan.color, fontWeight: 'bold' }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/pricing" className="btn" style={{ padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '50px', border: '1px solid var(--border)', backgroundColor: 'white', color: '#0f172a', fontWeight: 600 }}>
            View Detailed Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;
