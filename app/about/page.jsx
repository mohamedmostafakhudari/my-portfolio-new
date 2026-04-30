import Bio from "@/components/aboutpage/Bio";
import Skills from "@/components/aboutpage/Skills";
import Divider from "@/components/ui/divider";
import { getSkills } from "@/lib/data";
import Image from "next/image";
const AboutPage = async () => {
	const skills = await getSkills();

	return (
		<div>
			<section
				id="about-head"
				className="bg-card rounded overflow-hidden"
			>
				<div className="flex items-center gap-6">
					<Image
						src="/about-1.jpg"
						alt="about-image"
						width="130"
						height="130"
						className="w-auto h-auto"
						loading="eager"
					/>
					<div className="space-y-4 px-2">
						<h2 className="text-xl">
							Mohamed Mostafa - Full-Stack Web Developer
						</h2>
						<div>
							<p>Based In: Cairo, Egypt</p>
							<p>Available for freelance and contract work</p>
						</div>
					</div>
				</div>
			</section>
			<Divider className="my-8" />
			<Bio />
			<Divider className="my-8" />
			<Skills skills={skills} />
		</div>
	);
};

export default AboutPage;
