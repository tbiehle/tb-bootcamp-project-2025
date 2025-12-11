import Project from "@/database/projectSchema";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectPreview({ project }: Props) {
  return (
    <div className="flex flex-col w-4/5 md:w-1/2 outline-1 hover:outline-2 outline-green-800 rounded-xl p-2 my-2 mx-4">
      <Link
        href={`/portfolio/${project.slug}`}
        className="flex justify-between m-2 w-auto px-3 py-2"
      >
        <div className="flex flex-col justify-start">
          <div>
            {/* title and description */}
            <div className="text-4xl font-title">
              {project.title.toLowerCase()}
            </div>
            <div>{project.description}</div>
          </div>
        </div>
        <Image
          alt={project.image_alt}
          src={project.image}
          width={100}
          height={100}
          className="w-1/3 aspect-square object-cover rounded-2xl"
        ></Image>
      </Link>
    </div>
  );
}
