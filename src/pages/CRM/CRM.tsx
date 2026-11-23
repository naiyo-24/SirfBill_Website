import { Link } from 'react-router-dom';

const CRM = () => {
  const crmFeatures = [
    {
      icon: '📅',
      title: 'Smart Scheduling',
      description: 'Manage doctor appointments effortlessly. Reduce no-shows with automated WhatsApp and SMS reminders for patients.',
      bgColor: 'var(--primary-light)',
      color: 'var(--primary)'
    },
    {
      icon: '📂',
      title: 'Digital Health Records',
      description: 'Keep a secure, cloud-based history of patient visits, prescriptions, and lab reports accessible from anywhere.',
      bgColor: '#e0f2fe',
      color: '#0ea5e9'
    },
    {
      icon: '✍️',
      title: 'E-Prescriptions',
      description: 'Generate readable digital prescriptions instantly. Integrates directly with the Pharmacy POS for immediate billing.',
      bgColor: '#fee2e2',
      color: '#ef4444'
    },
    {
      icon: '👨‍⚕️',
      title: 'Multi-Doctor Support',
      description: 'Perfect for polyclinics. Give individual dashboards to different doctors to manage their own schedules and patients.',
      bgColor: '#f3e8ff',
      color: '#a855f7'
    },
    {
      icon: '💰',
      title: 'Consultation Billing',
      description: 'Handle consultation fees, follow-up discounts, and daily revenue settlements for visiting consultants seamlessly.',
      bgColor: '#fef3c7',
      color: '#f59e0b'
    },
    {
      icon: '📱',
      title: 'Telemedicine Ready',
      description: 'Set up virtual consultation slots and manage secure video links and payment collections directly through the CRM.',
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#e0f2fe', color: '#0ea5e9', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              <span style={{ backgroundColor: '#0ea5e9', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
              Built for Clinics & Polyclinics
            </div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#0f172a', lineHeight: 1.1 }}>
              Clinic <span style={{ color: '#0ea5e9' }}>CRM</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Deliver a modern patient experience. Manage appointments, electronic medical records, and clinic billing all from one unified dashboard.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px', backgroundColor: '#0ea5e9', boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.2)' }}>
                Request a Demo
              </Link>
            </div>
          </div>
          <div style={{ flex: '1.2 1 450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src="/images/CLINIC.png" 
              alt="Clinic CRM Dashboard" 
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>Simplify Clinic Operations</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Reduce administrative work for your reception staff and allow doctors to focus on patient care.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {crmFeatures.map((feature, idx) => (
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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Upgrade your clinic today</h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Join hundreds of doctors using SirfBill to provide a modern healthcare experience.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/pricing" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', backgroundColor: '#0ea5e9', boxShadow: 'none' }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRM;
