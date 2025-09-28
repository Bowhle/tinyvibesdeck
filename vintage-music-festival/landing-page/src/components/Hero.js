import React from 'react';
import Poster from '../assets/Vintage_Music_Festival_Digital.jpg';

function Hero() {
    return (
        <section
        aria-label='Festival hero'
        style={{
            position: 'relative', 
            textAlign: 'center'
        }}
        >
        <img
            src={Poster}
            alt='Vintage Music Festival poster'
            style={{
            width: '100%',
            borderRadius: 20,
            }}
        />
        </section>
    );
}

export default Hero;
