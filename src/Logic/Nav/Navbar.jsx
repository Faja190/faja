import styles from "../../Styles/Navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import resume from "../../resources/Fatima-resume.pdf";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (location.pathname === "/") {
            //already on homepage so the action should scroll to the top
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            //go home
            navigate("/");
        }
    };

    return (
        <nav className={styles.navbar}> 
            <div className={styles.navbarLogo}> 
               <a onClick={handleHomeClick}>
                    F.Aja
                </a> 
            </div>
            <ul className = {styles.navbarLinks}>
                <li> 
                    <a onClick={handleHomeClick}>
                        Home
                    </a>
                </li>
                <li> <Link to="/about">About</Link> </li>
                <li> 
                    <ScrollLink to="skills" offset={-150}>
                        Skills & Tools
                    </ScrollLink> 
                </li>
                <li> 
                    <ScrollLink to="projects" offset={-150}>
                        Projects
                    </ScrollLink> </li>
                <li>  
                    <a href= {resume} 
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