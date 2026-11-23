import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh', padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Side: Copy */}
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            <span style={{ backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
            Free 14-Day Trial
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            See SirfBill in <span style={{ color: 'var(--primary)' }}>Action</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Schedule a personalized 1-on-1 demo with our product experts. We'll show you exactly how SirfBill can streamline your pharmacy, restaurant, or custom billing operations.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: '#e0f2fe', color: '#0ea5e9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>✓</div>
              <div>
                <h4 style={{ color: '#0f172a', marginBottom: '0.25rem', fontSize: '1.1rem' }}>Tailored Walkthrough</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>We focus on the exact modules and workflows you need.</p>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: '#fce7f3', color: '#ec4899', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>✓</div>
              <div>
                <h4 style={{ color: '#0f172a', marginBottom: '0.25rem', fontSize: '1.1rem' }}>Live Q&A</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Get all your technical, hardware, and pricing questions answered.</p>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>✓</div>
              <div>
                <h4 style={{ color: '#0f172a', marginBottom: '0.25rem', fontSize: '1.1rem' }}>Free Setup & Migration</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>We'll help configure your custom invoice templates and import inventory.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Side: Form */}
        <div style={{ flex: '1 1 500px' }}>
          <div className="card" style={{ padding: '3rem', borderTop: '4px solid var(--primary)' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>Book Your Demo</h3>
            
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>First Name</label>
                  <input type="text" placeholder="John" style={{ 
                    width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', fontFamily: 'inherit', transition: 'border-color 0.2s ease'
                  }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ 
                    width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', fontFamily: 'inherit', transition: 'border-color 0.2s ease'
                  }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Business Name</label>
                <input type="text" placeholder="e.g. Apollo Pharmacy / Cafe Bistro / Apex Store" style={{ 
                  width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', fontFamily: 'inherit', transition: 'border-color 0.2s ease'
                }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Phone Number</label>
                <input type="tel" placeholder="+91" style={{ 
                  width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', fontFamily: 'inherit', transition: 'border-color 0.2s ease'
                }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Business Type</label>
                <div style={{ position: 'relative' }}>
                  <select style={{ 
                    width: '100%', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '1rem', backgroundColor: 'white', appearance: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 0.2s ease'
                  }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}>
                    <option>Retail Pharmacy & Medical Store</option>
                    <option>Restaurant / Cafe / QSR / Cloud Kitchen</option>
                    <option>Customized Billing (Retail / Wholesale / Enterprise)</option>
                    <option>Polyclinic / Clinic CRM</option>
                    <option>Pathology Diagnostic Lab</option>
                    <option>Multi-Store Chain / Franchise</option>
                  </select>
                  <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }}>
                    ▼
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ 
                padding: '1rem', width: '100%', fontSize: '1.1rem', marginTop: '1rem', display: 'flex', gap: '0.5rem'
              }}>
                Schedule My Demo
              </button>
              
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                By submitting this form, you agree to our <Link to="/terms" style={{ color: 'var(--primary)' }}>Terms</Link> and <Link to="/privacy" style={{ color: 'var(--primary)' }}>Privacy Policy</Link>.
              </p>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Demo;
