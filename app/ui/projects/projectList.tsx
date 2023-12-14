"use client";
import { Project } from "@/app/lib/models/projects";
import Link from "next/link";
import { ProjectListItem } from "./projectListItem";
import { usePathname } from "next/navigation";

export function ProjectList({ projects }: { projects: Project[] }) {
    const pathname = usePathname();
    return (
        <>
            <div className="text-xs text-gray font-semibold p-8 pb-5">YOUR PROJECTS</div>
            <nav>
                <ul>
                    {
                        projects.map((project: Project) => {
                            const selected: boolean = project.id === pathname.split('/')[2]
                            return (
                                <li key={project.id}>
                                    <Link href={`/projects/${project.id}`}>
                                        <ProjectListItem
                                            selected={selected}
                                            avatarColor="bg-blue"
                                            item={{ memberCount: 6, title: project.name }} />
                                    </Link></li>)
                        })
                    }
                </ul>
            </nav>
        </>
    )
}