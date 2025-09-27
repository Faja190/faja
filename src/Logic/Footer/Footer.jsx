import styles from "../../Styles/Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaRegCopyright } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className={isHomePage ? styles.footer : styles.slimFooter}>
      {isHomePage && (
        <>
          <div className={styles.links}>
            <a href="mailto:fatimaajabukar@gmail.com" className={styles.link}>
              <FaEnvelope className={styles.icon} /> Email
            </a>
            <a
              href="https://github.com/Faja190"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaGithub className={styles.icon} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fatima-aja-bukar/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <FaLinkedin className={styles.icon} /> LinkedIn
            </a>
          </div>

          <p className={styles.message}>Feel free to reach out!</p>
        </>
      )}

      <div className={styles.copy}>
        <FaRegCopyright/> <p> {new Date().getFullYear()} Fatima Aja. All rights reserved. </p>
      </div>
    </footer>
  );
}
