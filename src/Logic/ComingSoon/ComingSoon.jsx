import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "../../Styles/ComingSoon.module.css";
import { Link } from "react-router-dom";
import FrameAnimation from "./FrameAnimation";

export default function ComingSoon() {
  return (
    <div className={styles.comingSoonPage}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>Sorry!</h2>
        <h3 className={styles.subtitle}>I'm still working on this page</h3>
      </div>

      <FrameAnimation className={styles.illustration}/>

      <Link to="/" className={styles.backButton}>
        <IoMdArrowRoundBack /> Back to Home
      </Link>
    </div>
  );
}
