
import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Introduction Section */}
        <section id="introduction" style={{ padding: '3rem 1rem 2rem 1rem', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontWeight: 700, fontSize: '2.5rem', color: 'var(--blue-dark)' }}>MCRC Tax and Accounting Services</h1>
          <h2 style={{ fontWeight: 400, fontSize: '1.5rem', color: 'var(--blue-main)', marginTop: 0 }}>Empowering Entrepreneurs</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>
            MCRC Tax and Accounting Services was founded in 2022 with a steadfast commitment to empowering small business owners. We understand the challenges faced by entrepreneurs, particularly in navigating the complexities of accounting and tax regulations. Our mission is to bridge this knowledge gap by providing comprehensive and accessible support to each and every micro and small business owner.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" style={{ background: 'var(--blue-light)', padding: '3rem 1rem', maxWidth: 900, margin: '0 auto', borderRadius: 16, marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--blue-dark)', fontWeight: 700 }}>How We Can Help</h2>
          <h3 style={{ color: 'var(--blue-main)', fontWeight: 600, marginTop: 0 }}>Core Accounting & Tax Services</h3>
          <ul style={{ columns: 2, fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, paddingLeft: 20 }}>
            <li>Audit & Assurance</li>
            <li>Financial Statement Preparation</li>
            <li>Tax Advisory & Compliance</li>
            <li>BIR Audit/LOA Assistance</li>
            <li>Bookkeeping</li>
            <li>Payroll Processing</li>
          </ul>
          <h3 style={{ color: 'var(--blue-main)', fontWeight: 600, marginTop: '2rem' }}>Business Registration & Compliance</h3>
          <ul style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, paddingLeft: 20 }}>
            <li>Business Permit Registration and Renewals</li>
            <li>SEC/DTI/BIR/FDA Registration</li>
            <li>SSS/PhilHealth/Pag-ibig Compliance</li>
          </ul>
          <h3 style={{ color: 'var(--blue-main)', fontWeight: 600, marginTop: '2rem' }}>Advisory & Consulting</h3>
          <ul style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, paddingLeft: 20 }}>
            <li>Retirement Planning</li>
            <li>Business Consulting</li>
            <li>Financial Investment</li>
            <li>Financial Modeling</li>
          </ul>
          <h3 style={{ color: 'var(--blue-main)', fontWeight: 600, marginTop: '2rem' }}>Other Professional Services</h3>
          <ul style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, paddingLeft: 20 }}>
            <li>Legal Services (Contract drafting, review, negotiation, CPA Certification for Estate Tax)</li>
            <li>HR & Manpower Services</li>
            <li>Employee Modular Training Programs</li>
            <li>Brand Building and Customer Acquisition</li>
            <li>Graphic Design and Multimedia Production</li>
          </ul>
        </section>

        {/* Permits Section */}
        <section id="permits" style={{ padding: '3rem 1rem', maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ color: 'var(--blue-dark)', fontWeight: 700 }}>Permits & Registration</h2>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--blue-main)', fontWeight: 600 }}>DTI Registration</h3>
            <p style={{ color: 'var(--text-main)' }}>MCRC Tax and Accounting Services is a registered business with the Department of Trade and Industry (DTI), valid until January 2027.</p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: 'var(--blue-main)', fontWeight: 600 }}>BIR Registration</h3>
            <p style={{ color: 'var(--text-main)' }}>Registered with the Bureau of Internal Revenue (BIR) for accounting, bookkeeping, and tax consultancy services.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--blue-main)', fontWeight: 600 }}>Business Permit</h3>
            <p style={{ color: 'var(--text-main)' }}>Business permit valid until December 31, 2025, issued by the City of Marikina.</p>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" style={{ background: 'var(--background)', padding: '3rem 1rem', maxWidth: 900, margin: '0 auto', borderRadius: 16, marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--blue-dark)', fontWeight: 700 }}>Clients and Partners</h2>
          <p style={{ color: 'var(--text-main)' }}>We are proud to have worked with a diverse range of clients and partners, including:</p>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', listStyle: 'none', padding: 0, margin: '2rem 0' }}>
            <li>SPX Express</li>
            <li>Unioil</li>
            <li>Walandyo</li>
            <li>Sun Life</li>
            <li>SAGD Development</li>
            <li>Minute Burger</li>
            <li>Ttalgi Mart</li>
            <li>GW Paws</li>
          </ul>
        </section>

        {/* About Section */}
        <section id="about" style={{ padding: '3rem 1rem', maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ color: 'var(--blue-dark)', fontWeight: 700 }}>About the Accountant</h2>
          <h3 style={{ color: 'var(--blue-main)', fontWeight: 600 }}>Christian R. Canlubo</h3>
          <p style={{ color: 'var(--text-main)' }}>
            As an Accountant, Christian is deeply committed to driving innovation, fostering a culture of excellence, and delivering exceptional value to clients. With over nine years of experience in the industry, he has a proven track record of leading high-performing teams and executing strategic initiatives that propel business growth. He is passionate about empowering entrepreneurs, embracing new technologies, and cultivating strong relationships with stakeholders.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ background: 'var(--blue-light)', padding: '3rem 1rem', maxWidth: 900, margin: '0 auto', borderRadius: 16, marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--blue-dark)', fontWeight: 700 }}>Contact Information</h2>
          <p style={{ color: 'var(--text-main)' }}>For any questions or consultations, please reach out to:</p>
          <ul style={{ fontSize: '1.1rem', color: 'var(--text-main)', listStyle: 'none', padding: 0 }}>
            <li><strong>Phone:</strong> +63 919 066 0794</li>
            <li><strong>Email:</strong> christian.canlubo@mcrctas.com</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
