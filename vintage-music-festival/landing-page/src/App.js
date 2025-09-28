import './index.css';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
{/* import EventDetails from './components/EventDetails'; */} 
{/* import CTASection from './components/CTASection'; */} 

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <EventDetails /> */}
        {/* <CTASection /> */}
      </main>
      <Footer />
    </>
  );
}
export default App;
