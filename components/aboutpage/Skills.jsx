"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const Skills = ({ skills }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	const x1 = useTransform(
		scrollYProgress,
		[0, 1],
		["-" + skills.slice(0, 5).length * 128 + "px", "0px"],
	);
	const x2 = useTransform(
		scrollYProgress,
		[0, 1],
		["100vw", "-" + skills.slice(5).length * 150 + "px"],
	);

	return (
		<section id="about-skills">
			<div
				className="min-h-[300vh]"
				ref={ref}
			>
				<div className="sticky top-32">
					<h2 className=" text-5xl">Skills</h2>
				</div>

				<div className="h-screen sticky top-0 flex overflow-hidden">
					<div className="flex items-center">
						<motion.ul
							className="relative flex items-center gap-8 p-4 px-6 rounded overflow-hidden"
							style={{ x: x1 }}
						>
							{skills.slice(0, 5).map((s) => {
								return (
									<li
										key={s.title}
										className="flex flex-col items-center"
									>
										<div className="w-32 shrink-0 min-h-[130px] grid place-content-center">
											<Image
												loading="eager"
												title={s.title}
												src={s.src}
												alt={s.title}
												width="80"
												height="80"
												className="w-auto h-auto"
											/>
										</div>
										<span className="text-2xl">{s.title}</span>
									</li>
								);
							})}
						</motion.ul>
						<motion.ul
							className="flex items-center gap-8 p-4 px-6 rounded overflow-hidden"
							style={{ y: 200, x: x2 }}
						>
							{skills.slice(5).map((s) => {
								return (
									<li
										key={s.title}
										className="flex flex-col items-center"
									>
										<div className="w-32 shrink-0 min-h-[130px] grid place-items-center">
											<Image
												loading="eager"
												title={s.title}
												src={s.src}
												alt={s.title}
												width="80"
												height="80"
												className="w-auto h-auto"
											/>
										</div>
										<span className="text-2xl">{s.title}</span>
									</li>
								);
							})}
						</motion.ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
