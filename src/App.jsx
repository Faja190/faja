import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Logic/Nav/Navbar";
import Intro from "./Logic/About/Intro";
import Skills from "./Logic/Skills/Skills";
import Projects from "./Logic/Projects/Projects";
import ProjectPage from "./Logic/Projects/ProjectPage";
import Footer from "./Logic/Footer/Footer";
import ComingSoon from "./Logic/ComingSoon/ComingSoon";

import "./Styles/index.css";

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Navbar />
        <main className="mainContent">
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
            
            {/* <Route path="/projects/:projectId" element={<ProjectPage />} /> */}
            <Route path="/projects/:projectId" element={<ComingSoon />} />
            <Route path="/about" element={<ComingSoon />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
