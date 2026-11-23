import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ModuleFeature {
  icon: string;
  title: string;
  desc: string;
}

interface ModulePreviewSectionProps {
  badgeText: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2?: string;
  description: string;
  features: ModuleFeature[];
  linkTo: string;
  linkText: string;
  imageSrc: string;
  themeColor: string;
  themeBgColor: string;
  imagePosition: 'left' | 'right';
  sectionBgColor: string;
}

const ModulePreviewSection = ({
  badgeText,
  titlePart1,
  titleHighlight,
  titlePart2 = '',
  description,
  features,
  linkTo,
  linkText,
  imageSrc,
  themeColor,
  themeBgColor,
  imagePosition,
  sectionBgColor
}: ModulePreviewSectionProps) => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: sectionBgColor, borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="container">
        {/* White Card Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '32px', 
            padding: '4rem', 
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
            display: 'flex', 
            alignItems: 'center', 
            gap: '4rem', 
            flexWrap: 'wrap', 
            flexDirection: imagePosition === 'left' ? 'row-reverse' : 'row'
          }}
        >
          
          {/* Text Side */}
          <div style={{ flex: '1 1 400px' }}>
            <motion.div 
              initial={{ opacity: 0, x: imagePosition === 'left' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: themeBgColor, color: themeColor, padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}
            >
              <span style={{ backgroundColor: themeColor, color: 'white', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>✓</span>
              {badgeText}
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, x: imagePosition === 'left' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem', lineHeight: 1.1 }}
            >
              {titlePart1} <span style={{ color: themeColor }}>{titleHighlight}</span> {titlePart2}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, x: imagePosition === 'left' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}
            >
              {description}
            </motion.p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {features.map((feat, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + (idx * 0.1) }}
                  style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                >
                  <div style={{ fontSize: '1.5rem' }}>{feat.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.25rem' }}>{feat.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <Link to={linkTo} className="btn" style={{ padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '50px', backgroundColor: themeColor, color: 'white', border: 'none', fontWeight: 600, display: 'inline-block' }}>
                {linkText}
              </Link>
            </motion.div>
          </div>

          {/* Image Side (No Background, just the raw graphic) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
            style={{ flex: '1.2 1 450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img 
              src={imageSrc} 
              alt={`${titleHighlight} Dashboard Preview`} 
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 20px 35px -10px rgba(0,0,0,0.12)' }} 
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ModulePreviewSection;
