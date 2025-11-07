import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import ProjectPreview from "@/components/projectPreview";

async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().orFail();
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col">
      <h1 className="flex text-9xl font-title text-green-800 justify-center pt-0 p-5">
        portfolio
      </h1>
      <div className="mb-5">
        {projects &&
          projects.map((project) => {
            return (
              <div key={project.slug} className="flex justify-center">
                <ProjectPreview project={project} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
