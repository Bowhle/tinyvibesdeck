import React from 'react';
import './Gallery.css';

import img1 from '../assets/gallery-1.jpg';
import img2 from '../assets/gallery-2.jpg';
import img3 from '../assets/gallery-3.jpg';

const images = [img1, img2, img3];

function Gallery() {
  const items = [...images, ...images];

  return (
    <section className="container gallery" aria-label="Previous events">
      <h2 className="heading" style={{ marginTop: 0 }}>From Previous Events</h2>

      <div className="marquee">
        <div className="track">
          {items.map((src, i) => (
            <div key={i} className="frame">
              <img src={src} alt={`Event ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
