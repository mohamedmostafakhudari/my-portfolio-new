import ProjectImage from "@/components/projects/ProjectImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectItem = async ({
	id,
	slug,
	title,
	image,
	description,
	techStack,
	liveUrl,
	githubUrl,
}) => {
	return (
		<Card className="relative mx-auto w-full">
			<ProjectImage
				image={image}
				title={title}
			/>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>
						<CardTitle>
							<h2 className="text-lg">{title}</h2>
						</CardTitle>
						<p className="mt-1.5 bg-gray-600/30 max-w-max p-2 px-3 rounded-lg">
							{liveUrl}
						</p>
					</div>
					<Link
						target="_blank"
						href={liveUrl || ""}
						className="bg-gray-600/30 max-w-fit p-3 rounded-lg text-primary cursor-pointer"
						title="Show Live"
					>
						<FaExternalLinkAlt />
					</Link>
				</div>
				<CardDescription className={"space-y-2 mt-2"}>
					<p>{description}</p>
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
				</CardDescription>
			</CardHeader>
			<CardFooter>
				<div className="flex items-center w-full gap-3">
					<Button
						className="flex-1"
						asChild
					>
						<Link href={`/projects/${slug}`}>Read More</Link>
					</Button>
					<Button
						variant="outline"
						className="flex-1"
						asChild
					>
						<Link
							href={githubUrl || "https://github.com/mohamedmostafakhudari"}
							target="_blank"
						>
							Github
						</Link>
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
};

export default ProjectItem;
