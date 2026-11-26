import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: '#f8fafc', padding: '5rem 0 2rem' }}>
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <div>
                <img src="/images/LOGO_DM.png" alt="SirfBill Logo" style={{ height: '60px' }} />
              </div>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.6, maxWidth: '300px' }}>
              The high-speed billing and operations software for pharmacies, restaurants, and custom enterprises. Engineered for speed and scale.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/features" style={{ color: '#94a3b8', textDecoration: 'none' }}>All Features</Link></li>
              <li><Link to="/pharmacy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Pharmacy POS</Link></li>
              <li><Link to="/restaurant" style={{ color: '#94a3b8', textDecoration: 'none' }}>Restaurant POS</Link></li>
              <li><Link to="/custom-billing" style={{ color: '#94a3b8', textDecoration: 'none' }}>Custom Billing</Link></li>
              <li><Link to="/crm" style={{ color: '#94a3b8', textDecoration: 'none' }}>Clinic CRM</Link></li>
              <li><Link to="/lab" style={{ color: '#94a3b8', textDecoration: 'none' }}>Lab Diagnostics</Link></li>
              <li><Link to="/pricing" style={{ color: '#94a3b8', textDecoration: 'none' }}>Pricing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 600 }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/terms" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms & Conditions</Link></li>
              <li><Link to="/privacy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</Link></li>
              <li><Link to="/refund" style={{ color: '#94a3b8', textDecoration: 'none' }}>Refund Policy</Link></li>
              <li><Link to="/security" style={{ color: '#94a3b8', textDecoration: 'none' }}>Data Security</Link></li>
              <li><Link to="/account-deletion" style={{ color: '#94a3b8', textDecoration: 'none' }}>Account Deletion</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} SirfBill. Modern Billing Software for Growing Enterprises. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Twitter</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>LinkedIn</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none' }}>Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
