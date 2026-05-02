import { auth } from "@/auth";
import ProjectItem from "@/components/admin/ProjectItem";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/data";
import Link from "next/link";

const AdminPage = async () => {
	const session = await auth();
	const { projects, error } = await getProjects();
	// console.log(projects);
	// console.log(session);

	return (
		<div>
			<div className="flex items-center">
				<p className="flex-1 text-3xl">
					Welcome, {session.user.name.split(" ")[0]}
				</p>
				<Button
					size="lg"
					asChild
				>
					<Link href="/admin/projects/create">Add Project</Link>
				</Button>
			</div>
			<div className="mt-6 space-y-4">
				<h2 className="text-2xl">Projects list</h2>
				<ul className="flex flex-col gap-3">
					{projects &&
						projects.map((p) => (
							<ProjectItem
								key={p.id}
								id={p.id}
								slug={p.slug}
								title={p.title}
							/>
						))}
				</ul>
			</div>
		</div>
	);
};

export default AdminPage;
