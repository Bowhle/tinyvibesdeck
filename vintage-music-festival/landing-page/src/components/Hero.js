import React from 'react';
import './Hero.css';
import poster from '../assets/Vintage_Music_Festival_Digital.gif';

/**
 * Returns a hero section with an image of the festival poster.
 * 
 * @returns {JSX.Element} A JSX element representing the hero section.
 */

function Hero() {
  return (
    <section className="hero" aria-label="Festival hero">
      <img
        className="hero-img"
        src={poster}
        alt="Vintage Music Festival poster"
      />
    </section>
  );
}

export default Hero;
