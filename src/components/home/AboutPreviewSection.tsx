import { Link } from 'react-router-dom';

const AboutPreviewSection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            <span style={{ backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
            About SirfBill
          </div>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Transforming <span style={{ color: 'var(--primary)' }}>Billing & Commerce</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            SirfBill started with a simple belief: businesses should spend their time delighting customers and patients, not battling with outdated software and slow billing lines.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Today, we are the unified billing software powering retail pharmacies, restaurants, cafes, and custom enterprise businesses — engineered for sub-second checkouts and total flexibility.
          </p>

          <Link to="/about" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '50px' }}>
            Learn More About Us →
          </Link>
        </div>

        <div style={{ flex: '1 1 400px', position: 'relative' }}>
          <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: '#e2e8f0', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}>
            <img src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Point of Sale Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ fontSize: '2.5rem' }}>⚡</div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1.2rem', color: '#0f172a' }}>Since 2019</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>High-Speed Billing</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPreviewSection;
