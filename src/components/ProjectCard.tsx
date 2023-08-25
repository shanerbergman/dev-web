import { Project } from "../data/posts";
const test = "test";
function ProjectCard({ title, slug, description, image, link }: Project) {
  const text = "test";
  return (
    <div>
      <div className="border border-slate-100 rounded-lg overflow-hidden">
        <a href={`https://${link}`} target="_blank" rel="noreferrer">
          <img
            src={`./${image}`}
            className=" object-cover w-full h-66 mb-4"
            alt=""
          />
        </a>
        <div className="p-4">
          <a href={`https://${link}`} target="_blank" rel="noreferrer">
            <p className="mb-4 text-2xl font-bold text-gray-800">{title}</p>
          </a>

          <p className="text-lg text-gray-500">{description}</p>
          <p>{slug}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
