
const LabFeatures = () => {
  const features = [
    { title: 'Test & Package Management', desc: 'Define individual diagnostics tests, group them into high-value packages, and assign custom pricing structures.' },
    { title: 'Template Builder', desc: 'A robust system to create rich-text templates for diagnostic reports, saving hours of manual data entry.' },
    { title: 'Sample Tracking', desc: 'Workflow management for sample collection, tracking processing status, and ensuring strict quality control.' },
    { title: 'Bookings & Final Reports', desc: 'Handle patient lab bookings, input test results into templates, and instantly generate finalized PDF reports.' },
    { title: 'Automated Delivery', desc: 'Automated dispatch of finished diagnostic reports directly to patients and referring doctors via email or SMS.' }
  ];

  return (
    <section id="lab" className="features">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: 'var(--info)' }}>Lab Dashboard (Pathology)</h2>
          <p>End-to-End Diagnostic and Pathology Lab Management</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="card" key={i}>
              <div className="feature-icon info">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"></path><path d="M14 9.3V1.99"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path><path d="M5.52 16h12.96"></path></svg>
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

export default LabFeatures;
