import About from '../About/About.tsx';
import Contact from '../Contact/Contact.tsx';
import Experience from '../Experience/Experience.tsx';
import Footer from '../Footer/Footer.tsx';
import Header from '../Header/Header.tsx';
import Projects from '../Projects/Projects.tsx';
import Skills from '../Skills/Skills.tsx';
import geni18n from '../i18n.tsx';

geni18n();

function App() {


  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
