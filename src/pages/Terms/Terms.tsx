const Terms = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>Terms & Conditions</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Last updated: October 2026</p>
        </div>
      </section>
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '1rem', color: '#0f172a' }}>1. Acceptance of Terms</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>By accessing and using SirfBill, you accept and agree to be bound by the terms and provision of this agreement.</p>
          <h2 style={{ marginBottom: '1rem', color: '#0f172a' }}>2. License to Use</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>We grant you a personal, non-exclusive, non-transferable, limited privilege to enter and use the platforms.</p>
        </div>
      </section>
    </div>
  );
};
export default Terms;
