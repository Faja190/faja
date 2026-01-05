import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { scroller } from "react-scroll";

import Navbar from "./Logic/Nav/Navbar";
import Intro from "./Logic/About/Intro";
import Skills from "./Logic/Skills/Skills";
import Projects from "./Logic/Projects/Projects";
import ProjectPage from "./Logic/Projects/ProjectPage";
import Footer from "./Logic/Footer/Footer";
import ComingSoon from "./Logic/ComingSoon/ComingSoon";
import ScrollToTop from "./Logic/Util/ScrollToTop";

import "./Styles/index.css";

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        offset: -75,
      });
    }
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Intro />
            <Skills />
            <Projects />
          </>
        }
      />
      <Route path="/projects/:projectId" element={<ComingSoon />} />
      <Route path="/about" element={<ComingSoon />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="appContainer">
        <Navbar />
        <main className="mainContent">
          <ScrollHandler />
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
