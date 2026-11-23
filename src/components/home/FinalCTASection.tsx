import { Link } from 'react-router-dom';

const FinalCTASection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#0f172a', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>
          Ready to grow your business?
        </h2>
        <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          Join the thousands of pharmacies, restaurants, and growing businesses that have already upgraded to SirfBill. Setup takes less than 5 minutes.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/demo" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px' }}>Start Your Free Trial</Link>
          <Link to="/contact" className="btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', backgroundColor: 'transparent', color: 'white', border: '1px solid #334155' }}>Talk to Sales</Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
