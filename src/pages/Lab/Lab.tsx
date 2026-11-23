import { Link } from 'react-router-dom';

const Lab = () => {
  const labFeatures = [
    {
      icon: '🧪',
      title: 'Sample Management',
      description: 'Generate barcodes for test samples instantly. Track samples from collection point to processing without losing data.',
      bgColor: 'var(--primary-light)',
      color: 'var(--primary)'
    },
    {
      icon: '📄',
      title: 'Smart Reporting',
      description: 'Auto-flag abnormal test results based on built-in reference ranges. Generate beautiful, professional PDF reports.',
      bgColor: '#e0f2fe',
      color: '#0ea5e9'
    },
    {
      icon: '🔔',
      title: 'Automated Notifications',
      description: 'Automatically send WhatsApp and SMS alerts to patients with a secure download link the moment their report is ready.',
      bgColor: '#fee2e2',
      color: '#ef4444'
    },
    {
      icon: '🔬',
      title: 'Machine Integration',
      description: 'Connect directly to your auto-analyzers (LIS integration). Fetch results directly into the software, eliminating manual entry errors.',
      bgColor: '#f3e8ff',
      color: '#a855f7'
    },
    {
      icon: '💼',
      title: 'B2B Phlebotomy',
      description: 'Manage sample collections from partner clinics and collection centers. Handle bulk invoicing and commission tracking.',
      bgColor: '#fef3c7',
      color: '#f59e0b'
    },
    {
      icon: '💳',
      title: 'Integrated Billing',
      description: 'Collect partial payments, handle due amounts upon report collection, and seamlessly manage health packages and discounts.',
      bgColor: '#fce7f3',
      color: '#ec4899'
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fce7f3', color: '#ec4899', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <span style={{ backgroundColor: '#ec4899', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
              Built for Diagnostic Centers
            </div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#0f172a', lineHeight: 1.1 }}>
              Lab <span style={{ color: '#ec4899' }}>Diagnostics</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Streamline your entire laboratory workflow. From patient registration and sample barcoding to LIS integration and report delivery.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px', backgroundColor: '#ec4899', boxShadow: '0 4px 6px -1px rgba(236, 72, 153, 0.2)' }}>
                Request a Demo
              </Link>
            </div>
          </div>
          <div style={{ flex: '1.2 1 450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src="/images/LAB.png" 
              alt="Lab Diagnostics Dashboard" 
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>Zero Errors, Maximum Speed</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Manage your diagnostic center with software that understands the critical nature of pathology reporting.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {labFeatures.map((feature, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ 
                  backgroundColor: feature.bgColor, 
                  color: feature.color, 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.75rem',
                  marginBottom: '1.5rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1e293b' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#0f172a', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Ready for modern diagnostics?</h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Increase your daily sample processing capacity and deliver a premium experience to your patients.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/pricing" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', backgroundColor: '#ec4899', boxShadow: 'none' }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lab;
