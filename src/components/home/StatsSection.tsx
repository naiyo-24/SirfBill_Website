const StatsSection = () => {
  return (
    <section style={{ backgroundColor: '#f0fdf4', borderTop: '1px solid #dcfce7', borderBottom: '1px solid #dcfce7', padding: '2rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>👥</div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>15,000+</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Pharmacies & Businesses</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ color: '#d97706', fontSize: '2.5rem' }}>🍽️</div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>1,200+</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Restaurants, Cafes & QSRs</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>🛡️</div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>99.9%</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Uptime & Data Security</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>🎧</div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>24/7</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Dedicated Support</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
