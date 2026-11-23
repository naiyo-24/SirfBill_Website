const BenefitsSection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>Why Choose SirfBill?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            We built SirfBill from the ground up to solve billing bottlenecks for pharmacies, restaurants, and custom businesses.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          
          <div style={{ backgroundColor: 'white', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto 1.5rem' }}>⚡</div>
            <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem' }}>Lightning Fast</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Sub-second invoice generation and instant thermal prints. Never keep customers waiting.</p>
          </div>

          <div style={{ backgroundColor: 'white', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto 1.5rem' }}>🎨</div>
            <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem' }}>100% Customizable</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Tailor invoice layouts, fields, tax slabs, and trade schemes to match your exact business logic.</p>
          </div>

          <div style={{ backgroundColor: 'white', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto 1.5rem' }}>☁️</div>
            <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem' }}>Cloud & Offline Sync</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>Continue billing uninterrupted even during internet outages. Live auto-sync to cloud.</p>
          </div>

          <div style={{ backgroundColor: 'white', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#fce7f3', color: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', margin: '0 auto 1.5rem' }}>🔒</div>
            <h4 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem' }}>Bank-Grade Security</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>End-to-end encrypted ledger data, daily automatic backups, and granular staff role controls.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
