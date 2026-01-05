import styles from "../../Styles/Navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { scroller } from "react-scroll";

import { IoMenu } from "react-icons/io5";

import resume from "../../resources/Fatima-resume.pdf";


export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  //close menu if on a different page
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navbarLogo}>
        <a onClick={handleHomeClick}>F.Aja</a>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Menu"
      >
        <IoMenu />
      </button>

      <ul className={`${styles.navbarLinks} ${
          menuOpen ? styles.showMenu : ""
          }`} 
      >
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
