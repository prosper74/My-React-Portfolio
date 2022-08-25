import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { UilArrowUp } from "@iconscout/react-unicons";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Services from "./pages/services/Services";
import Qualifications from "./pages/qualifications/Qualifications";
import Portfolio from "./pages/portfolio/Portfolio";
import Testimonials from "./pages/testimnoials/Testimonials";
import Contact from "./pages/contact/Contact";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import "./styles.scss";

function App() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollup, setScrollup] = useState(false);
  const [themeIcon, setThemeIcon] = useState(false);

  const handleScrollup = () => {
    if (window.scrollY >= 270) {
      setScrollup(true);
    } else {
      setScrollup(false);
    }
  };

  window.addEventListener("scroll", handleScrollup);

  return (
    <div className={themeIcon ? "darkTheme" : "lightTheme"}>
      {loading ? (
        <div className="loader">
          <HashLoader color={"#9932cc"} loading={loading} size={60} />
        </div>
      ) : (
        <>
          <Header
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            themeIcon={themeIcon}
            setThemeIcon={setThemeIcon}
          />
          <main className="main">
            <Home themeIcon={themeIcon} />
            <About themeIcon={themeIcon} />
            <Skills themeIcon={themeIcon} />
            <Services themeIcon={themeIcon} />
            <Portfolio themeIcon={themeIcon} />
            <Qualifications themeIcon={themeIcon} />
            <Testimonials themeIcon={themeIcon} />
            <Contact themeIcon={themeIcon} />
            <Footer themeIcon={themeIcon} />
            <a
              href="#home"
              className={scrollup ? "scrollup active" : "scrollup"}
            >
              <UilArrowUp size="20" className="scrollupIcon" />
            </a>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
