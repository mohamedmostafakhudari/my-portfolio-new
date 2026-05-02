import DeleteButton from "@/components/admin/DeleteButton";
import { Button } from "@/components/ui/button";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemTitle,
} from "@/components/ui/item";
import { deleteProject } from "@/lib/actions/projectActions";
import Link from "next/link";

const ProjectItem = ({ id, title, slug }) => {
	return (
		<Item
			variant="outline"
			asChild
			className={"bg-card"}
		>
			<li>
				<ItemContent>
					<ItemTitle>{title}</ItemTitle>
				</ItemContent>
				<ItemActions>
					<Button
						variant="outline"
						asChild
					>
						<Link href={`/admin/projects/${slug}/edit`}>Edit</Link>
					</Button>
					{/* 
				Why .bind() instead of arrow function?
				- Next.js needs to serialize the action reference when passing from Server -> Client
				- Arrow functions can't be serialized (anonymous)					
					*/}
					<DeleteButton deleteProjectAction={deleteProject.bind(null, id)} />
				</ItemActions>
			</li>
		</Item>
	);
};

export default ProjectItem;
