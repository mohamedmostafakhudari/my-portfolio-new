import { Button } from "@/components/ui/button.jsx";
import Image from "next/image.js";

const PostCard = ({ coverImage, title, excerpt }) => {
	return (
		<div className="flex items-center gap-6 p-4 rounded bg-gray-100">
			<div className="p-3">
				<Image
					loading="eager"
					src={coverImage}
					alt={title}
					width="300"
					height="300"
					className="rounded-lg"
				/>
			</div>
			<div className="space-y-5">
				<h2>{title}</h2>
				<div className="space-y-3">
					<p>{excerpt}</p>
					<Button>Continue Reading</Button>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
