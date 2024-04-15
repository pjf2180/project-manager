import { fetchProjects } from "../../lib/data/projects/getProjects";
import { ProjectList } from "../../ui/projects/projectList";
import { NavbarContainer } from "@/app/ui/shared/layout/Navbar.container";

export default async function Layout({
  children,
  params,
}: {
  params: { projectId: string };
  children: React.ReactNode;
}) {
  const projectSelected: boolean = !!params?.projectId;
  const projects = await fetchProjects("c8c98818-f908-4444-a3cd-5e692cdc1885");
  return (
    <div className="flex flex-col h-screen">
      <NavbarContainer />
      <div className="flex flex-1">
        <div className="hidden lg:block border-r bg-white h-full md:w-64">
          <ProjectList projects={projects} />
        </div>
        {projectSelected && <div className="flex-1">{children}</div>}
        {!projectSelected && <div>No Project Selected</div>}
      </div>
    </div>
  );
}
