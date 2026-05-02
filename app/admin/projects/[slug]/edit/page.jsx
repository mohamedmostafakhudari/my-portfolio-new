import ProjectForm from "@/components/form/ProjectForm";
import { getProject } from "@/lib/data";

const EditProjectPage = async ({ params }) => {
	const { slug } = await params;

	const project = await getProject(slug);
	console.log(project);
	const { id, title, description, image, liveUrl, githubUrl, techStack } =
		project;
	return (
		<ProjectForm
			{...{
				id,
				title,
				slug,
				description,
				image,
				liveUrl,
				githubUrl,
				techStack,
			}}
		/>
	);
};

export default EditProjectPage;
