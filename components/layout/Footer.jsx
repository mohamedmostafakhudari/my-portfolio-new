import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-card self-end">
			<div className="container max-w-4xl mx-auto flex items-center">
				<p className="flex-1">&copy; 2026 Mohamed Mostafa</p>
				<Link
					href="/"
					className="shrink-0 py-4 px-2"
				>
					<Image
						src="/github.png"
						alt="github"
						width="24"
						height="24"
					/>
				</Link>
				<Link
					href="/"
					className="shrink-0 py-4 px-2 ml-4"
				>
					<Image
						src="/linkedin.png"
						alt="linkedin"
						width="24"
						height="24"
					/>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
