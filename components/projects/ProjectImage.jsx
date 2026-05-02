"use client";

import NextImage from "next/image";
import { useEffect, useState } from "react";

const ProjectImage = ({ image, title }) => {
	const [src, setSrc] = useState("https://avatar.vercel.sh/shadcn1");

	useEffect(() => {
		const img = new Image();
		img.onload = () => setSrc(image);
		img.onerror = () => setSrc("https://avatar.vercel.sh/shadcn1");
		img.src = image;
	}, [image]);
	return (
		<NextImage
			loading="eager"
			width="300"
			height="300"
			src={src}
			alt={title || "cover image"}
			className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
		/>
	);
};

export default ProjectImage;
