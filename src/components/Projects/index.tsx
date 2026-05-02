import { getProjects } from "@/src/lib/projects";
import ProjectsSection from "./ProjectsSection";

export default async function Projects() {
	const projects = await getProjects();
	return <ProjectsSection projects={projects} />;
}
