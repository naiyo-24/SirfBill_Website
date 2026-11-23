const Privacy = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Last updated: October 2026</p>
        </div>
      </section>
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '1rem', color: '#0f172a' }}>1. Information Collection</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>We collect information to provide better services to all our users - from figuring out basic stuff like your language, to more complex things.</p>
          <h2 style={{ marginBottom: '1rem', color: '#0f172a' }}>2. Data Security</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>We work hard to protect SirfBill and our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold.</p>
        </div>
      </section>
    </div>
  );
};
export default Privacy;
