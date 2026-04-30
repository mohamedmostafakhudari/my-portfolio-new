import { Card, CardContent, CardTitle } from "@/components/ui/card.jsx";
import Link from "next/link";
const DownloadCV = () => {
	return (
		<Link
			href=""
			download
			className="cursor-pointer d-inline-block w-full"
		>
			<Card
				size="sm"
				className="mx-auto w-full transition ease-in-out hover:bg-primary-hover"
			>
				<CardContent className={"min-h-20 grid place-content-center"}>
					<CardTitle className="text-xl font-bold">Download CV</CardTitle>
				</CardContent>
			</Card>
		</Link>
	);
};

export default DownloadCV;
