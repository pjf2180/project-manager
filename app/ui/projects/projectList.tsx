"use client";
import { Project } from "@/app/lib/models/projects";
import Link from "next/link";
import { ProjectListItem } from "./projectListItem";
import { usePathname } from "next/navigation";

export function ProjectList({ projects }: { projects: Project[] }) {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <>
            <div>YOUR PROJECTS</div>
            <nav>
                <ul>
                    {
                        projects.map((project: Project) => {
                            console.log(pathname.split('/'))
                            const selected: boolean = project.id === pathname.split('/')[2]
                            return (<li key={project.id}><Link href={`${project.id}`}>
                                <ProjectListItem selected={selected} item={{ memberCount: 6, title: project.name }} />
                            </Link></li>)
                        })
                    }
                </ul>
            </nav>
        </>
    )
}