import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../../Styles/Intro.module.css";

import resume from "../../resources/Fatima-resume.pdf";

export default function Intro() {
    return (
        <section id="home" className={styles.intro}>
            <div className={styles.introContent}>
                <h2> Hi There! </h2>
                <h1> I'm Fatima Aja </h1>
                <p className={styles.role}>Full-Stack Developer · UI/UX Enthusiast</p>
                <div className={styles.introButtons}> 

                    <div className={styles.resumeContainer}> 
                        <a 
                            href= {resume}   // adjust path to where your resume is stored
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.resumeBtn}
                        >
                            View my resume!
                        </a>
                    </div>

                    <div className={styles.linksBtn}>
                        <a
                            href="https://github.com/Faja190"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconLink}
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fatima-aja-bukar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconLink}
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                    
                </div>
            </div>

            <hr className={styles.sectionDivider} />

            

            <div className={styles.introSection}>
                <div className={styles.who}>
                    <p>Who am I?</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.introBody}>
                    <p>
                        I am a CS Honours graduate from the University of Manitoba, passionate about
                        building things that are both functional and thoughtfully designed.
                    </p>
                    <p>
                        I care about clean code, intuitive interfaces, and software that makes
                        someone's day a little easier.
                    </p>
                </div>
            </div>
            <hr className={styles.sectionDivider} />
        </section>
    );
}