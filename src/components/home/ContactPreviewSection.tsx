import { Link } from 'react-router-dom';

const ContactPreviewSection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>Get in Touch</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Have questions about SirfBill? We are here to help. Contact our support or sales team.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          <div className="card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem' }}>📍</div>
            <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem' }}>Office Address</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>1/30B, Chittaranjan Colony<br/>Kolkata, WB 700032</p>
          </div>

          <div className="card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem' }}>📞</div>
            <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem' }}>Phone Support</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>+91 62891 71798<br/>Debasish Baidya</p>
          </div>

          <div className="card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#fce7f3', color: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.5rem' }}>✉️</div>
            <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem' }}>Email Us</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>naiyooffice@gmail.com<br/>24hr Response Time</p>
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem', borderRadius: '50px' }}>
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPreviewSection;
