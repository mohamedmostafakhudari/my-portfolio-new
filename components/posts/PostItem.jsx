import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image.js";
import Link from "next/link.js";

const PostItem = ({ title, coverImage, tags, authorId, likesCount }) => {
	return (
		<div>
			(
			<Card className="relative mx-auto w-full max-w-sm pt-0">
				<div className="absolute inset-0 z-30 aspect-video bg-black/35" />
				<Image
					src={coverImage}
					alt={title}
					width="300"
					height="300"
				/>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardFooter>
					<div className="flex flex-col items-center relative">
						{/* circle */}
						<div className="w-12 h-12 bg-red-500 rounded-full absolute top-1/2 -translate-y-1/2 -left-1/2"></div>
						<Link
							href="/"
							className="relative"
						>
							Read More
						</Link>
					</div>
				</CardFooter>
			</Card>
			)
		</div>
	);
};

export default PostItem;
