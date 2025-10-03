import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './index.css';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import CTASection from './components/CTASection';

import About from './components/About';
import Programme from './components/Programme';
import TicketsGrid from './components/TicketsGrid';
import Gallery from './components/Gallery';

import TicketsPage from './components/TicketsPage';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <EventDetails />
        <TicketsGrid />
        <CTASection />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<TicketsPage />} />
        {/* a lil fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
