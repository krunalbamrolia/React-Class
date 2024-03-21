import './main.js';
import './style.css';

import TopBar from './main/TopBar.jsx';
import Header from './main/Header.jsx';
import Hero from './main/Hero.jsx';
import About from './main/About.jsx';
import Menu from './main/manu.jsx';
import Events from './main/Events.jsx';
import BookTable from './main/BookTable.jsx';
import Gallery from './main/Gallery.jsx';
import Testimonial from './main/Testimonial.jsx';
import Contact from './main/Contact.jsx';
import Footer from './main/Footer.jsx';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Menu />
        <Events />
        <BookTable />
        <Gallery />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
