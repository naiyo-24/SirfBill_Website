const AccountDeletion = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      <section style={{ padding: '6rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem' }}>Account Deletion</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Last updated: October 2026</p>
        </div>
      </section>
      <section style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '1rem', color: '#0f172a' }}>Requesting Deletion</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>To permanently delete your account and all associated data, please send an email to privacy@sirfbill.com from your registered email address.</p>
          <h2 style={{ marginBottom: '1rem', color: '#0f172a' }}>Data Retention</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Upon request, your data will be permanently wiped from our active servers within 7 days. Backups may retain encrypted fragments for up to 30 days before natural rotation.</p>
        </div>
      </section>
    </div>
  );
};
export default AccountDeletion;
