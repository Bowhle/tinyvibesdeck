import React from 'react';
import './Programme.css';

const fullProgramme = [
  'Class of 2025 Graduation',
  'Opening – National Anthem (Both Schools)',
  'Sweet Melody — Busybees',
  'Thobela — Appleseed',
  'Ram Sam Sam — Blue Class',
  'Bewungakanani & 2 Bob — Caterpillar + Teddy Bear',
  'Khwela Khwela — Green Class',
  'It’s About Time — Ladybug Class',
  'Special Star — Yellow Class',
  'Home Talk — Superbees',
  'Midodo — Red Class',
  'Mama Land — Butterfly Class',
  'Paga Paga — Busybees',
  'Vul’indlela — Appleseed',
  'Closing – Vote of Thanks (Principal)',
];

export default function Programme() {
  const [showAll, setShowAll] = React.useState(false);
  const items = showAll ? fullProgramme : fullProgramme.slice(0, 4);

  return (
    <section id="programme" className="container prog" aria-labelledby="prog-title">
      <div className="prog-card">
        <h2 id="prog-title" className="prog-title">Programme Line-Up</h2>

        <div className="prog-list">
          {items.map((item, i) => (
            <div key={i} className="prog-item">
              <strong>{i + 1}.</strong>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="prog-actions">
          <button
            className="btn btn-outline"
            onClick={() => setShowAll(v => !v)}
            aria-expanded={showAll}
          >
            {showAll ? 'Show Less' : 'Show Full Programme'}
          </button>
          <a href="#tickets" className="btn">Buy Tickets</a>
        </div>
      </div>
    </section>
  );
}
