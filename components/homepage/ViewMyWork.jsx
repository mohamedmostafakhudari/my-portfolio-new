import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link.js";

const ViewMyWork = () => {
	return (
		<Link
			href="/projects"
			className="d-inline-block w-full"
		>
			<Card
				size="sm"
				className="mx-auto w-full bg-primary transition ease-in-out hover:bg-primary-hover"
			>
				<CardContent className={"min-h-20 grid place-content-center"}>
					<CardTitle className="text-xl font-bold text-primary-foreground">
						View My Work
					</CardTitle>
				</CardContent>
			</Card>
		</Link>
	);
};

export default ViewMyWork;
