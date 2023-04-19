import { Project } from "../data/posts";

function ProjectCard({ title, description, image, link }: Project) {
  return (
    <div>
      <div className="border border-slate-100 rounded-lg overflow-hidden">
        <img src={image} className=" object-cover w-full h-96 mb-4" alt="" />
        <div className="p-4">
          <a href={`https://${link}`} target="_blank" rel="noreferrer">
            <p className="mb-4 text-2xl font-bold text-gray-800">{title}</p>
          </a>

          <p className="text-lg text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
