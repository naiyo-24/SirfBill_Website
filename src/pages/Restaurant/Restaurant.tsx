import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const restaurantFeatures = [
  {
    icon: '🍽️',
    title: 'Table & Floor Management',
    description: 'Visual table map with live status (Vacant, Occupied, Billed, Reserved). Move, merge, or split tables with a single tap.',
    bgColor: '#fef3c7',
    color: '#d97706'
  },
  {
    icon: '🧾',
    title: 'Instant KOT Dispatch',
    description: 'Send orders directly to kitchen thermal printers or KDS (Kitchen Display System). Separate tickets by food stations automatically.',
    bgColor: '#fee2e2',
    color: '#ef4444'
  },
  {
    icon: '💳',
    title: 'Split Bill & Fast Checkout',
    description: 'Split bills equally or item-wise. Support cash, UPI, cards, and digital wallets with instant thermal receipt printing.',
    bgColor: 'var(--primary-light)',
    color: 'var(--primary)'
  },
  {
    icon: '📦',
    title: 'Recipe & Ingredient Inventory',
    description: 'Auto-deduct raw materials based on recipes when items sell. Get timely low-stock alerts for critical kitchen supplies.',
    bgColor: '#e0f2fe',
    color: '#0ea5e9'
  },
  {
    icon: '🛵',
    title: 'Takeaway & Online Delivery',
    description: 'Handle high-volume counter orders, drive-through, and online parcel pickups effortlessly from a unified terminal.',
    bgColor: '#f3e8ff',
    color: '#a855f7'
  },
  {
    icon: '📊',
    title: 'Food Sales & Margins Analytics',
    description: 'Discover bestsellers, track chef performance, monitor food wastage, and view hourly peak-sales trends in real-time.',
    bgColor: '#ecfdf5',
    color: '#059669'
  }
];

const foodOutlets = [
  { icon: '☕', name: 'Cafes & Bakeries', desc: 'Fast counter billing, combo offers, and token displays.' },
  { icon: '🍲', name: 'Fine Dining & Restos', desc: 'Table maps, multi-course KOTs, and steward captain apps.' },
  { icon: '🍔', name: 'Quick Service (QSR)', desc: 'Lightning-fast checkout, barcode scanning, and barcode tokens.' },
  { icon: '🛵', name: 'Cloud Kitchens', desc: 'Multi-brand centralized billing and dispatch tracking.' },
  { icon: '🍺', name: 'Pubs & Bars', desc: 'Running tabs, happy hours pricing, and beverage stock controls.' },
  { icon: '🍦', name: 'Dessert & Ice Cream', desc: 'Weighing scale integration, scoop inventory, and quick bills.' }
];

const Restaurant = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <section style={{ padding: '5.5rem 0 4rem', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3.5rem' }}>
          
          <div style={{ flex: '1 1 500px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fef3c7', color: '#92400e', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.25rem' }}
            >
              <span style={{ backgroundColor: '#d97706', color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
              Built for Restaurants, Cafes & Cloud Kitchens
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: '3.4rem', marginBottom: '1.25rem', color: '#0f172a', lineHeight: 1.12, letterSpacing: '-0.5px' }}
            >
              Restaurant POS & <span style={{ color: '#d97706' }}>Billing Software</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}
            >
              From table-side ordering and instant KOT printing to recipe inventory and fast checkout — SirfBill gives your food & beverage business the horsepower to serve more guests with zero delays.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link to="/demo" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.05rem', borderRadius: '50px', backgroundColor: '#d97706', color: 'white', fontWeight: 700, boxShadow: '0 4px 14px rgba(217, 119, 6, 0.35)' }}>
                Book Restaurant Demo →
              </Link>
              <Link to="/pricing" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.05rem', borderRadius: '50px', border: '1px solid var(--border)', backgroundColor: 'white', color: '#1e293b', fontWeight: 600 }}>
                View Pricing
              </Link>
            </motion.div>

            {/* Quick stats badges */}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0' }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>&lt; 3 Sec</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>KOT to Kitchen</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Offline & Cloud Sync</div>
              </div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Zero</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Billing Bottlenecks</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div style={{ flex: '1.2 1 480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ width: '100%', position: 'relative' }}
            >
              <img 
                src="/images/restaurant_pos.jpg" 
                alt="Restaurant POS & Billing Software Interface" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '18px', 
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  display: 'block',
                  border: '1px solid rgba(0,0,0,0.08)'
                }} 
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '-15px', 
                left: '20px', 
                backgroundColor: 'white', 
                padding: '0.85rem 1.25rem', 
                borderRadius: '12px', 
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '1px solid #f1f5f9'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🔥</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>Live Table Occupancy</div>
                  <div style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 600 }}>Real-time Floor Sync Active</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Outlet types supported */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '0.5rem' }}>Designed for Every Food Format</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Whether you operate a single cafe or a bustling multi-chain restaurant group.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {foodOutlets.map((outlet, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '12px', 
                border: '1px solid var(--border)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ fontSize: '2rem' }}>{outlet.icon}</div>
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 700, margin: 0 }}>{outlet.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>{outlet.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>Everything Your Restaurant Needs</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
              Cut down wait times, prevent order confusion between waitstaff and chefs, and maximize revenue per table.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {restaurantFeatures.map((feature, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '2.25rem' }}>
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
                  marginBottom: '1.25rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1e293b' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#0f172a', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'white' }}>Upgrade Your Restaurant Experience Today</h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '2.25rem', maxWidth: '600px', margin: '0 auto 2.25rem' }}>
            Get a tailored live demonstration showing SirfBill customized for your menu and floor arrangement.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/demo" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px' }}>
              Schedule a Free Demo
            </Link>
            <Link to="/contact" className="btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '50px', backgroundColor: 'transparent', border: '1px solid #475569', color: 'white' }}>
              Talk to Restaurant Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
