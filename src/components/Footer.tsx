
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} SirfBill. Engineered for Modern Medical Enterprises.</p>
        <div className="flex justify-center gap-4" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
          <a href="#" style={{ color: 'var(--text-hint)' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-hint)' }}>Terms of Service</a>
          <a href="#" style={{ color: 'var(--text-hint)' }}>Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
