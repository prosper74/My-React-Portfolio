import React, { useState } from "react";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Services from "./pages/services/Services";
import Qualifications from "./pages/qualifications/Qualifications";
import Portfolio from "./pages/portfolio/Portfolio";
import Testimonials from "./pages/testimnoials/Testimonials";
import Contact from "./pages/contact/Contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="main">
        <Home />
        <About />
        <Qualifications />
        <Skills />        
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
