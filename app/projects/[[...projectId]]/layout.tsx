import { fetchProjects } from "../../lib/data/projects/getProjects";
import { ProjectList } from "../../ui/projects/projectList";

export default async function Layout({ children, params }: { params: { projectId: string }, children: React.ReactNode }) {
  const projectSelected: boolean = !!params?.projectId;
  const projects = await fetchProjects('aa811b4d-2f27-44ed-b69e-7164d837463e');
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none border-r-2 bg-white h-full md:w-64">
        <ProjectList projects={projects} />
      </div>
      {
        projectSelected && <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      }
      {
        !projectSelected && <div>No Project Selected</div>
      }
    </div>
  );
}