import './index.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EventDetails />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
export default App;
