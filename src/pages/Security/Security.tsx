const Security = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>Data Security</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Last updated: October 2026</p>
        </div>
      </section>
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '1rem', color: '#0f172a' }}>1. Encryption</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>All sensitive data is encrypted at rest using AES-256 and in transit using TLS 1.2+.</p>
          <h2 style={{ marginBottom: '1rem', color: '#0f172a' }}>2. Compliance</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Our systems comply with major healthcare data protection guidelines to ensure your patients' information is safe.</p>
        </div>
      </section>
    </div>
  );
};
export default Security;
