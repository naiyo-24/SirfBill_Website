
const CrmFeatures = () => {
  const features = [
    { title: 'Smart Appointments', desc: 'Calendar and list views for scheduling, managing, and tracking patient appointments across multiple doctors.' },
    { title: 'Doctors Directory', desc: 'Manage in-house and visiting doctors, their schedules, and specialization profiles with ease.' },
    { title: 'Patient Records', desc: 'Comprehensive patient profiles, maintaining clinical histories, and detailed visit logs.' },
    { title: 'Digital Prescriptions', desc: 'Digital prescription generation that links directly to the pharmacy’s inventory for seamless dispensing.' },
    { title: 'Lab Integration', desc: 'Dedicated flow for doctors to request diagnostic tests and send patients directly to the internal lab.' },
    { title: 'Financials & Orders', desc: 'Track orders, consultations, and payment receipts effortlessly within the clinic ecosystem.' }
  ];

  return (
    <section id="crm" className="features" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: 'var(--secondary)' }}>CRM Dashboard (Clinic)</h2>
          <p>The Digital Backbone for Patient and Doctor Management</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="card" key={i} style={{ backgroundColor: 'var(--background)' }}>
              <div className="feature-icon secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
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

export default CrmFeatures;
