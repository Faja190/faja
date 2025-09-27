import { useParams } from "react-router-dom";
import { projects } from "../../Data/projectsData";

import ProjectCarousel from "./ProjectCarousel";

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>

      <ProjectCarousel images={project.images} />
    </div>
  );
}
