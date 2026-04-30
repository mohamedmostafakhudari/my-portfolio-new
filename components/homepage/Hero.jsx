import DownloadCV from "@/components/homepage/DownloadCV";
import SocialMedia from "@/components/homepage/SocialMedia";
import ViewMyWork from "@/components/homepage/ViewMyWork";

const Hero = () => {
	return (
		<section id="hero-section">
			<div className="text-center">
				<h1 className="text-5xl font-bold tracking-tight">
					Hi, I&apos;m Mohamed
				</h1>
				<div className="space-y-4">
					<h2 className="text-2xl mt-10">Full-Stack Developer</h2>
					<p className="text-gray-500">
						Building scalable products, end to end.
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center gap-6 mt-12">
				<ViewMyWork />
				<DownloadCV />
			</div>
			<div className="flex items-center justify-center mt-12 max-w-80 mx-auto">
				<SocialMedia />
			</div>
		</section>
	);
};

export default Hero;
