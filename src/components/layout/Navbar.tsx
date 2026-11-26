import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const solutions = [
  {
    icon: '💊',
    title: 'Pharmacy POS & Medicine Billing',
    desc: 'GST invoicing, batch & expiry control, salt substitutes',
    path: '/pharmacy',
    badge: 'HEALTHCARE',
    badgeColor: '#166534',
    badgeBg: '#dcfce7',
    iconBg: '#f0fdf4'
  },
  {
    icon: '🍽️',
    title: 'Restaurant POS & KOT Billing',
    desc: 'Table floor maps, kitchen KOT thermal prints, split billing',
    path: '/restaurant',
    badge: 'NEW',
    badgeColor: '#b45309',
    badgeBg: '#fef3c7',
    iconBg: '#fffbeb'
  },
  {
    icon: '⚙️',
    title: 'Customized Billing Software',
    desc: 'Bespoke invoice designer, custom fields (IMEI/serials) & APIs',
    path: '/custom-billing',
    badge: 'TAILORED',
    badgeColor: '#7e22ce',
    badgeBg: '#f3e8ff',
    iconBg: '#faf5ff'
  },
  {
    icon: '🏥',
    title: 'Clinic CRM & Diagnostic Lab',
    desc: 'Doctor appointments, electronic prescriptions & pathology reports',
    path: '/crm',
    badge: 'CLINICAL',
    badgeColor: '#0369a1',
    badgeBg: '#e0f2fe',
    iconBg: '#f0f9ff'
  }
];

const Navbar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('sirfbill-theme') === 'dark');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isSolutionsActive = ['/pharmacy', '/restaurant', '/custom-billing', '/crm', '/lab'].some(
    (p) => location.pathname === p || location.pathname.startsWith(p)
  );

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('sirfbill-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const getLinkStyle = (path: string) => {
    const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    return {
      textDecoration: 'none',
      color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
      borderBottom: isActive ? '2px solid var(--primary)' : 'none',
      paddingBottom: '0.25rem',
      whiteSpace: 'nowrap' as const,
      transition: 'color 0.2s ease'
    };
  };

  return (
    <nav className="site-nav" style={{ padding: '0.85rem 0', backgroundColor: '#FFFFFF', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container site-nav-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand Logo (Links to Home) */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="/images/LOGO.png" alt="SirfBill Logo" style={{ height: '46px', width: 'auto' }} />
        </Link>

        {/* Central Nav Links */}
        <div className="desktop-nav-links" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center', fontWeight: 600, fontSize: '0.95rem' }}>
          
          {/* Solutions Dropdown Menu */}
          <div 
            style={{ position: 'relative' }} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 600,
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: isSolutionsActive || dropdownOpen ? 'var(--primary)' : 'var(--text-secondary)',
                borderBottom: isSolutionsActive ? '2px solid var(--primary)' : 'none',
                paddingBottom: '0.25rem',
                paddingLeft: 0,
                paddingRight: 0,
                whiteSpace: 'nowrap'
              }}
            >
              Solutions
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.2s ease',
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  opacity: 0.8
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown Card */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 14px)',
                    left: '-80px',
                    maxWidth: 'calc(100vw - 2rem)',
                    width: '600px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.15), 0 0 1px 1px rgba(0, 0, 0, 0.06)',
                    border: '1px solid #f1f5f9',
                    padding: '1.25rem',
                    zIndex: 200,
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                    {solutions.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        style={{
                          textDecoration: 'none',
                          padding: '0.85rem',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.85rem',
                          transition: 'background-color 0.15s ease, transform 0.15s ease',
                          border: '1px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8fafc';
                          e.currentTarget.style.borderColor = '#e2e8f0';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                      >
                        <div style={{
                          backgroundColor: item.iconBg,
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.35rem',
                          flexShrink: 0
                        }}>
                          {item.icon}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                            <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0f172a' }}>
                              {item.title}
                            </span>
                            <span style={{
                              fontSize: '0.62rem',
                              fontWeight: 800,
                              backgroundColor: item.badgeBg,
                              color: item.badgeColor,
                              padding: '1px 6px',
                              borderRadius: '8px',
                              letterSpacing: '0.5px'
                            }}>
                              {item.badge}
                            </span>
                          </div>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Dropdown Footer CTA */}
                  <div style={{
                    backgroundColor: '#f8fafc',
                    margin: '-1.25rem -1.25rem -1.25rem -1.25rem',
                    padding: '0.85rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid #e2e8f0',
                    fontSize: '0.85rem'
                  }}>
                    <span style={{ color: 'var(--text-secondary)' }}>
                      Need an enterprise custom solution?
                    </span>
                    <Link to="/custom-billing" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>
                      Learn more →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/features" style={getLinkStyle('/features')}>Features</Link>
          <Link to="/pricing" style={getLinkStyle('/pricing')}>Pricing</Link>
          <Link to="/about" style={getLinkStyle('/about')}>About</Link>
          <Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link>
        </div>

        {/* Right CTA Actions */}
        <div className="nav-actions" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexShrink: 0 }}>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((previous) => !previous)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={darkMode}
          >
            <span aria-hidden="true">{darkMode ? '☀️' : '🌙'}</span>
            <span className="theme-toggle-label">{darkMode ? 'Light' : 'Dark'}</span>
          </button>
          <button className="btn" style={{ backgroundColor: 'white', color: 'var(--text-primary)', border: '1px solid var(--border)', padding: '0.5rem 1.25rem', height: '40px', fontWeight: 600, fontSize: '0.9rem' }}>
            Login
          </button>
          <Link to="/demo" className="btn btn-outline get-app-link">
            Get App
          </Link>
          <Link to="/demo" className="btn btn-primary" style={{ padding: '0.5rem 1.35rem', borderRadius: '6px', height: '40px', whiteSpace: 'nowrap', fontSize: '0.9rem' }}>
            Request a Demo →
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          {/* Solutions Accordion in Mobile */}
          <div className="mobile-solutions-section">
            <button
              type="button"
              className="mobile-solutions-toggle"
              onClick={() => setMobileSolutionsOpen((prev) => !prev)}
            >
              <span>Solutions</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: 'transform 0.25s ease',
                  transform: mobileSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {mobileSolutionsOpen && (
              <div className="mobile-solutions-list">
                {solutions.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="mobile-solution-item"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mobile-solution-icon" style={{ backgroundColor: item.iconBg }}>
                      {item.icon}
                    </span>
                    <div>
                      <div className="mobile-solution-title">
                        {item.title}
                        <span
                          className="mobile-solution-badge"
                          style={{ color: item.badgeColor, backgroundColor: item.badgeBg }}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <div className="mobile-solution-desc">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((previous) => !previous)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={darkMode}
          >
            <span aria-hidden="true">{darkMode ? '☀️' : '🌙'}</span>
            {darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          </button>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', width: '100%' }}>
            <Link to="/demo" className="btn btn-outline" style={{ flex: 1, textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>Get App</Link>
            <Link to="/demo" className="btn btn-primary" style={{ flex: 1, textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>Request a Demo →</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
