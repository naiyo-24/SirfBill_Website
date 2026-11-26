import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="home-hero" style={{ padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container home-hero-content" style={{ display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
        
        {/* Left Content */}
        <div style={{ flex: '1 1 500px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}
          >
            <span style={{ backgroundColor: 'var(--primary)', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
            Pharmacy • Restaurant • Custom Business Billing Software
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: '3.4rem', color: '#0f172a', lineHeight: 1.12, marginBottom: '1rem', letterSpacing: '-1px' }}
          >
            Smart Billing Software for<br/>
            <span style={{ color: 'var(--primary)' }}>Pharmacy, Restaurant</span><br/>
            & Custom Businesses
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '92%', lineHeight: 1.6 }}
          >
            Generate lightning-fast GST invoices, automate medicine batch expiry, manage restaurant tables & KOTs, or deploy fully customized billing workflows built for your unique industry.
          </motion.p>

          {/* Features Grid */}
          <div className="hero-feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { icon: '💊', title: 'Pharmacy POS', sub: 'Batch & Expiry', color: '#22c55e' },
              { icon: '🍽️', title: 'Restaurant POS', sub: 'Tables & KOT', color: '#f59e0b' },
              { icon: '⚙️', title: 'Custom Billing', sub: 'Bespoke Workflows', color: '#9333ea' },
              { icon: '🧾', title: 'Fast Invoicing', sub: 'GST & Thermal', color: '#3b82f6' },
              { icon: '📦', title: 'Inventory', sub: 'Stock & Recipe', color: '#a855f7' },
              { icon: '📊', title: 'Reports & P&L', sub: 'Business Insights', color: '#ef4444' },
              { icon: '🏥', title: 'Clinic & Lab', sub: 'EMR & Diagnostic', color: '#0ea5e9' },
              { icon: '🏪', title: 'Multi-Store', sub: 'Centralized Cloud', color: '#10b981' }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + (i * 0.05) }}
                style={{ backgroundColor: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '0.75rem', textAlign: 'left', boxShadow: '0 2px 4px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: f.color }}>{f.icon}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e293b' }}>{f.title}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>{f.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-4 items-center hero-cta"
          >
            <Link to="/demo" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px', boxShadow: '0 4px 14px rgba(34,197,94,0.4)' }}>Request a Free Demo →</Link>
            <button className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px', backgroundColor: 'white', border: '1px solid var(--border)', color: '#1e293b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.8rem' }}>▶</span> Watch Video
            </button>
          </motion.div>
        </div>
        
        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="hero-dashboard"
          style={{ flex: '1 1 500px', position: 'relative', perspective: '1000px', padding: '1rem', display: 'flex', justifyContent: 'flex-end' }}
        >
            <style>
              {`
                @keyframes floatImage {
                  0% { transform: rotateY(-8deg) rotateX(4deg) translateY(0px); }
                  50% { transform: rotateY(-8deg) rotateX(4deg) translateY(-15px); }
                  100% { transform: rotateY(-8deg) rotateX(4deg) translateY(0px); }
                }
              `}
            </style>
            <img className="hero-dashboard-image" src="/images/home.png" alt="SirfBill Dashboard Mockup" style={{
              width: '110%', 
              maxWidth: '750px', 
              height: 'auto', 
              display: 'block', 
              borderRadius: '24px', 
              boxShadow: '0 40px 80px -15px rgba(0, 0, 0, 0.3), 0 25px 40px -20px rgba(0, 0, 0, 0.2)', 
              animation: 'floatImage 6s ease-in-out infinite',
              marginRight: '-10%' /* Push it slightly further to the right edge */
            }} />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
