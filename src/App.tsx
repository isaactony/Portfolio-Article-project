import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Clients />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;