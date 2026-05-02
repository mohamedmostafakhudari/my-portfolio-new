import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, getProjectsStaticParams } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	/* this function is called as one of the steps that happen during build time alongside
 the file optimizations, prerendering (HTML + RSCP), and assets preparations for deployment */
	const projects = await getProjectsStaticParams();

	return projects.map((p) => ({
		slug: p.slug,
	}));
}

// multiple versions of the page below will be statically generated at build time (prerendering)
// at request-time they would be already there, Save the visit!
const ProjectDetailsPage = async ({ params }) => {
	const { slug } = await params;
	const project = await getProject(slug);

	if (!project) notFound();

	const { title, description, image, techStack, liveUrl, githubUrl } = project;

	return (
		<div className="flex flex-col items-center">
			<Image
				src={image}
				alt={title}
				width="300"
				height="300"
			/>
			<div className="mt-8 flex flex-col items-center gap-6">
				<div className="flex flex-col items-center gap-3">
					<h1 className="text-3xl">{title}</h1>
					<div className="flex items-center gap-1 flex-wrap">
						{techStack && techStack.length
							? techStack.map((t) => {
									return (
										<Badge
											variant="outline"
											key={t}
										>
											{t}
										</Badge>
									);
								})
							: ""}
					</div>
				</div>
				<p className="text-left">
					{description}
					{description}
					{description}
				</p>
				<div className="flex items-center self-start gap-6 w-full mt-8">
					<Button asChild>
						<Link href={liveUrl}>Live Demo</Link>
					</Button>
					<Button
						variant="outline"
						asChild
					>
						<Link href={githubUrl}>View Code</Link>
					</Button>
					<div className="ml-auto">
						<Button
							variant="outline"
							asChild
						>
							<Link href={"/projects"}>Back to Projects</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsPage;

// it defaults to auto = cache as much as possible
// by making it false we make sure that unspecified paths are not prerendered at runtime
// basically only paths at generateStaticParams() will be served nothing else
// it won't trigger on-demand render attempt but 404
export const dynamicParams = false;
