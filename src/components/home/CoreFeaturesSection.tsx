import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CoreFeaturesSection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>Comprehensive Billing Capabilities</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
            Built for retail pharmacies, bustling restaurants, and specialized enterprises needing tailored billing systems.
          </p>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {[
            { icon: '💊', title: 'Pharmacy POS & Expiry', desc: 'Lightning-fast GST-ready medicine billing, batch tracking, substitute salt engine, and supplier returns.', color: 'var(--primary)', bg: 'var(--primary-light)' },
            { icon: '🍽️', title: 'Restaurant POS & KOT', desc: 'Table-side ordering, instant thermal KOT dispatch, split billing, recipe inventory, and takeaway sync.', color: '#d97706', bg: '#fef3c7' },
            { icon: '⚙️', title: 'Custom Billing Engine', desc: 'Tailor-made invoice designs, custom data fields (IMEI, warranty, serials), custom tax rules, and API hooks.', color: '#9333ea', bg: '#f3e8ff' },
            { icon: '📦', title: 'Smart Stock & Inventory', desc: 'Automated reorder triggers, multi-warehouse stock transfer, ingredient deduction, and barcode generation.', color: '#0ea5e9', bg: '#e0f2fe' },
            { icon: '📊', title: 'GST Filing & Financials', desc: 'GSTR-1/3B summary reports, profit-margin analysis, party ledgers, and automated payment reminders.', color: '#ef4444', bg: '#fee2e2' },
            { icon: '🏪', title: 'Multi-Store & Cloud Sync', desc: 'Run multi-branch chains with centralized inventory controls, consolidated reporting, and role permissions.', color: '#10b981', bg: '#d1fae5' }
          ].map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="card" 
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', cursor: 'default' }}
            >
              <div style={{ backgroundColor: f.bg, color: f.color, width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1.25rem' }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#0f172a' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <Link to="/features" className="btn" style={{ padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '50px', border: '1px solid var(--border)', backgroundColor: 'white', color: '#0f172a', fontWeight: 600 }}>
            View All Features
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
