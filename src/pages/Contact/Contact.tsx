const Contact = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh', padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '1200px', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
        
        {/* Left Side: Contact Info */}
        <div style={{ flex: '1 1 400px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Get in Touch</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.6 }}>
            Have questions about SirfBill? Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>📍</div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#1e293b' }}>Office Address</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>1/30B, Chittaranjan Colony,<br/>Baghajatin Colony, Kolkata,<br/>West Bengal 700032</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#e0f2fe', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>📞</div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#1e293b' }}>Phone Number</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>+91 62891 71798<br/>Debasish Baidya</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#f3e8ff', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>✉️</div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#1e293b' }}>Email Address</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>naiyooffice@gmail.com</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fef3c7', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>🕒</div>
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#1e293b' }}>Business Hours</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Monday – Saturday<br/>12:00 PM – 7:00 PM</p>
              </div>
            </div>

          </div>

          {/* Map */}
          <div style={{ 
            width: '100%', 
            height: '250px', 
            borderRadius: '16px', 
            overflow: 'hidden',
            border: '1px solid var(--border)',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            backgroundColor: '#e2e8f0'
          }}>
            <iframe 
              src="https://maps.google.com/maps?q=1/30B,%20Chittaranjan%20Colony,%20Baghajatin%20Colony,%20Kolkata,%20West%20Bengal%20700032&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Form */}
        <div style={{ flex: '1 1 500px' }}>
          <div className="card" style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>Send us a message</h3>
            
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Your Name</label>
                <input type="text" placeholder="Enter Your Full Name" style={{ 
                  width: '100%', 
                  padding: '0.85rem 1rem', 
                  borderRadius: '8px', 
                  border: '1px solid #cbd5e1', 
                  outline: 'none', 
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s ease'
                }} 
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Email Address</label>
                <input type="email" placeholder="Enter your email address" style={{ 
                  width: '100%', 
                  padding: '0.85rem 1rem', 
                  borderRadius: '8px', 
                  border: '1px solid #cbd5e1', 
                  outline: 'none', 
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s ease'
                }} 
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" style={{ 
                  width: '100%', 
                  padding: '0.85rem 1rem', 
                  borderRadius: '8px', 
                  border: '1px solid #cbd5e1', 
                  outline: 'none', 
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s ease'
                }} 
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Subject</label>
                <div style={{ position: 'relative' }}>
                  <select style={{ 
                    width: '100%', 
                    padding: '0.85rem 1rem', 
                    borderRadius: '8px', 
                    border: '1px solid #cbd5e1', 
                    outline: 'none', 
                    fontSize: '1rem', 
                    backgroundColor: 'white',
                    appearance: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                  >
                    <option>Select a Subject</option>
                    <option>Sales Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                  <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }}>
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  border: '1px solid #cbd5e1', 
                  outline: 'none', 
                  fontSize: '1rem', 
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ 
                padding: '1rem', 
                width: '100%', 
                fontSize: '1.1rem', 
                marginTop: '1rem',
                display: 'flex',
                gap: '0.5rem'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
