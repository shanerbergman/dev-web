import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { Container } from "../components/Container";
import { projects } from "../data/posts";
import NotFound from "./NotFound";
import { Helmet } from "react-helmet";

function ProjectPage() {
  const params = useParams();
  const slug = params.slug || "";
  const project = projects.find((p) => {
    return p.slug === slug;
  });

  if (project == undefined) {
    return <NotFound />;
  } else {
    return (
      <div>
        <Helmet>
          <title>{project.title}</title>
        </Helmet>
        <Container variant="blog">
          <BackButton to="/" />
          <img
            src={project.image}
            alt={project.title}
            className=" object-cover w-full h-96 rounded-2xl"
          />
          <section>
            <h1 className="py-16 text-4xl font-bold text-slate-800 text-center">
              {project.title}
            </h1>
          </section>

          <section>{project.description}</section>
        </Container>
      </div>
    );
  }
}

export default ProjectPage;
