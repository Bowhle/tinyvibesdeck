import React from 'react';
import { Link } from 'react-router-dom';
import './TicketsGrid.css';

// simple tier math
const pricePerTwo = 250; // R250 for 2
const tiers = [
  { label: 'Buy 2',  qty: 2,  price: pricePerTwo },
  { label: 'Buy 4',  qty: 4,  price: pricePerTwo * 2 },
  { label: 'Buy 6+', qty: 6,  price: pricePerTwo * 3 }, // extend logic as needed
];

function TicketsGrid() {
  return (
    <section className="container tix" aria-labelledby="tix-title">
      <h2 id="tix-title" className="tix-title">Tickets</h2>

      <div className="tix-grid">
        {tiers.map(({ label, qty, price }) => (
          <div key={label} className="flip">
            <div className="flip-inner">
              {/* front */}
              <div className="flip-face">
                <div>
                  <div className="heading" style={{ fontSize: 24 }}>{label}</div>
                  <div style={{ fontSize: 34, fontWeight: 900, marginTop: 6 }}>
                    R{price}
                  </div>
                </div>
              </div>
              {/* back */}
              <div className="flip-face flip-back">
                <div>
                  <div style={{ fontWeight: 700 }}>
                    {qty} tickets bundle
                  </div>
                  <div style={{ opacity: .8, marginTop: 6 }}>
                    Click to continue to details
                  </div>
                  <div className="tix-cta">
                    <Link
                      to={`/tickets?qty=${qty}&price=${price}`}
                      className="btn"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default TicketsGrid;
