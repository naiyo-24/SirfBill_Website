import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          <div style={{ flex: '1 1 50%' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <span style={{ backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
              About SirfBill
            </div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#0f172a', lineHeight: 1.1 }}>
              Transforming <span style={{ color: 'var(--primary)' }}>Billing & Commerce</span> for Modern Businesses
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              SirfBill started with a clear purpose: eliminate billing friction, error-prone manual calculations, and outdated software so businesses can operate at the speed of modern commerce.
            </p>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              From fast-paced retail pharmacies and healthcare providers to bustling restaurants and tailor-made custom enterprise solutions, SirfBill delivers the speed, accuracy, and flexibility required to scale.
            </p>
          </div>
          <div style={{ flex: '1 1 40%', position: 'relative' }}>
            {/* Using a placeholder for an office/team image */}
            <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: '#e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Modern Point of Sale and Commerce Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ fontSize: '2.5rem' }}>⚡</div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '1.2rem', color: '#0f172a' }}>Since 2019</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Innovating High-Speed Billing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem' }}>🎯</div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#0f172a' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              To empower pharmacies, restaurants, and growing enterprises with accessible, high-performance billing systems that eliminate errors, speed up checkout, and provide deep real-time operational insights.
            </p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ backgroundColor: '#e0f2fe', color: '#0ea5e9', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem' }}>👁️</div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#0f172a' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              To become the most reliable and customizable billing platform globally — enabling businesses of every size to mold invoice design, inventory tracking, and tax handling to their exact workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ padding: '6rem 0', backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>Core Values We Live By</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>The fundamental principles that guide our product development and customer support every single day.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '🤝', title: 'Customer First', desc: 'We build features based on real feedback from pharmacists and doctors, not assumptions.' },
              { icon: '🔒', title: 'Data Security', desc: 'Patient health data is sacred. We employ bank-grade encryption to ensure total privacy.' },
              { icon: '⚡', title: 'Relentless Speed', desc: 'In a medical emergency, every second counts. Our software is engineered for instant response times.' },
              { icon: '💡', title: 'Continuous Innovation', desc: 'We never stop improving. We consistently ship free updates to keep our users ahead of the curve.' }
            ].map((value, idx) => (
              <div key={idx} style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{value.icon}</div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1e293b' }}>{value.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#0f172a', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>15k+</div>
              <div style={{ color: '#cbd5e1', fontWeight: 600 }}>Active Businesses</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#3b82f6', marginBottom: '0.5rem' }}>50M+</div>
              <div style={{ color: '#cbd5e1', fontWeight: 600 }}>Invoices Generated</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#a855f7', marginBottom: '0.5rem' }}>99.9%</div>
              <div style={{ color: '#cbd5e1', fontWeight: 600 }}>Server Uptime</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#f97316', marginBottom: '0.5rem' }}>24/7</div>
              <div style={{ color: '#cbd5e1', fontWeight: 600 }}>Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0f172a' }}>Be Part of Our Journey</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            Whether you are running a pharmacy, expanding a restaurant chain, or need custom billing software engineered for your enterprise.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px' }}>
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
