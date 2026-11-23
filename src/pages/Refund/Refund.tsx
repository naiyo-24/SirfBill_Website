const Refund = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>Refund Policy</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Last updated: October 2026</p>
        </div>
      </section>
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '1rem', color: '#0f172a' }}>1. 30-Day Guarantee</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>If you are not entirely satisfied with your purchase, we're here to help. You have 30 calendar days to return an item from the date you received it.</p>
          <h2 style={{ marginBottom: '1rem', color: '#0f172a' }}>2. Process</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>To initiate a refund, please contact our support team at support@sirfbill.com with your receipt or proof of purchase.</p>
        </div>
      </section>
    </div>
  );
};
export default Refund;
