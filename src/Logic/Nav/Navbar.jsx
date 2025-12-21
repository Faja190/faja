import styles from "../../Styles/Navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import resume from "../../resources/Fatima-resume.pdf";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleScrollToSection = (section) => {
    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        smooth: true,
        offset: -75,
      });
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <a onClick={handleHomeClick}>F.Aja</a>
      </div>

      <ul className={styles.navbarLinks}>
        <li>
          <a onClick={handleHomeClick}>Home</a>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <a onClick={() => handleScrollToSection("skills")}>
            Skills & Tools
          </a>
        </li>

        <li>
          <a onClick={() => handleScrollToSection("projects")}>
            Projects
          </a>
        </li>

        <li>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navbarLink}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
