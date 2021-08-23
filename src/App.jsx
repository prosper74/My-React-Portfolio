import React, { useState } from "react";
import "./app.scss";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Services from "./pages/services/Services";
import Qualifications from "./pages/qualifications/Qualifications";
import Portfolio from "./pages/portfolio/Portfolio";
import Testimonials from "./pages/testimnoials/Testimonials";
import Contact from "./pages/contact/Contact";
import Footer from "./component/footer/Footer";
import { UilArrowUp } from "@iconscout/react-unicons";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollup, setScrollup] = useState(false);

  const handleScrollup = () => {
    if (window.scrollY >= 270) {
      setScrollup(true);
    } else {
      setScrollup(false);
    }
  };

  window.addEventListener("scroll", handleScrollup);

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
        <Footer />
        <a href="#home" className={scrollup ? "scrollup active" : "scrollup"}>
          <UilArrowUp size="20" className="scrollupIcon" />
        </a>
      </main>
    </div>
  );
}

export default App;
