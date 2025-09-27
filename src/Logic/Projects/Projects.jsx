import styles from "../../Styles/Projects.module.css";
import { Link } from "react-router-dom";
import { projects } from "../../Data/projectsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { FaGithub } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../Styles/Swiper.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      
      <h2 className={styles.sectionTitle}>Projects</h2> 
      
      <div className={styles.swiperContainer}> 
          <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },   
            768: { slidesPerView: 2 }, 
            1200: { slidesPerView: 3 } 
          }}
          className="swiper"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div className={styles.card}>
                <Link to={`/projects/${p.id}`} className={styles.cardLink}>
                  <a> <img className={styles.cardImage} src={p.cover} loading="lazy" ></img></a>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.description}</p>
                </Link>
                
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubIcon}
                >
                  <FaGithub />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}