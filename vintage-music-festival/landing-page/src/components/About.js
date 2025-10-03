import React from 'react';
import './About.css';

function Stat({ num, label }) {
  return (
    <div className="about-item">
      <div className="about-num">{num}</div>
      <div className="about-label">{label}</div>
    </div>
  );
}

function About() {
  return (
    <section className="container about">
      <div className="about-card">
        <h2 className="about-title">About the Event</h2>
        <p style={{ margin: 0 }}>
          A family-friendly vintage music day with costumes, sing-alongs,
          and a joyful preschool showcase.
        </p>
        <div className="about-grid">
          <Stat num="14+" label="Performances" />
          <Stat num="5"   label="Workshops" />
          <Stat num="300+" label="Guests" />
          <Stat num="4h"  label="Good Vibes" />
        </div>
      </div>
    </section>
  );
}

export default About;
