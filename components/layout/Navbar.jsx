"use client";
import useIsVisible from "@/hooks/useIsVisible";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const links = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "About",
		path: "/about",
	},
	{
		label: "Projects",
		path: "/projects",
	},
	{
		label: "Contact",
		path: "/contact",
	},
];

const Navbar = () => {
	const ref = useRef(null);
	const isVisible = useIsVisible(ref);

	return (
		<>
			<nav
				className={clsx(
					"bg-background",
					isVisible ? "opacity-100" : "opacity-0",
				)}
				ref={ref}
			>
				<NavContent />
			</nav>
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none">
				<nav
					className={clsx(
						"bg-card sticky top-0 z-10 pointer-events-auto",
						isVisible ? "opacity-0" : "opacity-100",
					)}
				>
					<NavContent />
				</nav>
			</div>
		</>
	);
};

const NavContent = () => {
	const currentPathname = usePathname();

	return (
		<div className="container flex items-center justify-between px-6 mx-auto max-w-4xl">
			<h1 className="text-xl font-bold text-primary">Mohamed Mostafa</h1>
			<div className="flex gap-8 items-center">
				{links.map(({ label, path }) => (
					<Link
						key={label}
						href={path}
						className={clsx("text-base py-8 hover:text-primary", {
							"text-primary underline": path === currentPathname,
						})}
					>
						{label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navbar;
