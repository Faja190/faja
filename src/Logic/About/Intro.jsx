import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../../Styles/Intro.module.css";

import resume from "../../resources/Fatima-resume.pdf";

export default function Intro() {
    return (
        <section id="home" className={styles.intro}>
            <div className={styles.introContent}>
                <h2> Hi There! </h2>
                <h1> I'm Fatima Aja </h1>
                <div className={styles.introButtons}> 

                    <div className={styles.resumeContainer}> 
                        <a 
                            href= {resume}   // adjust path to where your resume is stored
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.resumeBtn}
                        >
                            View and download my resume
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
                    <p> I'm a Computer Science graduate from University of Manitoba in Winnipeg. </p>
                    <p> I'm passionate about Full-Stack Development, Back-End Development, and UI/UX Design. </p>
                    <p> I hope to be someone who creates meaningful change one step at a time. </p>
                </div>
            </div>
            <hr className={styles.sectionDivider} />
        </section>
    );
}