
const PosFeatures = () => {
  const features = [
    { title: 'High-Speed Billing', desc: 'Fast and intuitive POS for creating custom invoices, calculating GST, and generating printable PDF receipts.' },
    { title: 'Advanced Inventory', desc: 'Full stock tracking, real-time low inventory alerts, and precise batch/expiry tracking.' },
    { title: 'Distributors & Purchases', desc: 'Manage distributor details, record incoming purchase bills, and update stock ledgers.' },
    { title: 'Customers & Accounts', desc: 'Track walk-in/registered customers, detailed purchase histories, and one-click data exports.' },
    { title: 'Bill Customization', desc: 'Extensive settings to format bills, add custom footers, and tailor the invoice layout.' },
    { title: 'Shop Management', desc: 'Financial summary cards, daily upload management, and comprehensive end-of-day reports.' }
  ];

  return (
    <section id="pos" className="features">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: 'var(--primary)' }}>Counter Dashboard (POS)</h2>
          <p>Pharmacy POS & Inventory Management Built for Speed</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="card" key={i}>
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
              </div>
              <h3>{f.title}</h3>
              <p style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PosFeatures;
