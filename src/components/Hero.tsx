
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>The Complete Digital Ecosystem for<br/><span className="highlight-text">Pharmacy, Clinics & Labs</span></h1>
        <p>
          SirfBill replaces clunky, disconnected software with a modern, unified platform. 
          Manage your Pharmacy POS, Clinical CRM, and Pathology Lab seamlessly from one lightning-fast dashboard.
        </p>
        <div className="flex justify-center gap-4" style={{ marginTop: '2.5rem' }}>
          <button className="btn btn-primary">Start Your Free Trial</button>
          <button className="btn btn-outline">Book a Live Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
