import { projects } from "../data/posts";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <div
      id="projectsSection"
      className="my-8 py-8 grid  gap-8 md:grid-cols-3  grid-cols-1"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          slug={project.slug}
          image={project.image}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectsSection;
