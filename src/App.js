import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Experience />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
