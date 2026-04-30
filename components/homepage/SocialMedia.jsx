import Image from "next/image.js";
import Link from "next/link.js";

const SocialMedia = () => {
	return (
		<div className="flex flex-1 gap-6 items-center justify-between px-6 rounded-lg bg-gray-600/10 w-full">
			<Link
				href="/"
				className="shrink-0 py-6 px-2"
			>
				<Image
					src="/github.png"
					alt="github"
					width="32"
					height="32"
				/>
			</Link>
			<Link
				href="/"
				className="shrink-0 py-6 px-2"
			>
				<Image
					src="/linkedin.png"
					alt="linkedin"
					width="32"
					height="32"
				/>
			</Link>
			<Link
				href="/"
				className="shrink-0 py-6 px-2"
			>
				<Image
					src="/gmail.png"
					alt="gmail"
					width="32"
					height="32"
				/>
			</Link>
		</div>
	);
};

export default SocialMedia;
