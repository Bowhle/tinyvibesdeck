import React from 'react';
import './CTASection.css';

function CTASection() {
  return (
    <section id="tickets" className="container cta" aria-labelledby="cta-title">
      <div className="cta-card">
        <h2 id="cta-title" className="cta-title">Ready to groove?</h2>
        <p className="cta-sub">Grab your spot now or save the date!</p>

        <a
          href="https://example.com/tickets"
          className="btn"
          target="_blank"
          rel="noreferrer"
          aria-label="Buy tickets (opens in a new tab)"
        >
          Buy Tickets
        </a>
      </div>
    </section>
  );
}

export default CTASection;
