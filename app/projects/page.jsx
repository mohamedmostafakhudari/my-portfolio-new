import ProjectItem from "@/components/projects/ProjectItem";
import { getProjects } from "@/lib/data";

const ProjectsPage = async () => {
	const projects = await getProjects();

	return (
		<div className="px-4">
			<h1 className="text-5xl text-center">My Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
				{projects.map((p) => (
					<ProjectItem
						key={p.id}
						{...p}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsPage;
