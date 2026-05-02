"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginBtn() {
	return (
		<Button
			variant="github"
			size="lg"
			onClick={() => signIn("github")}
		>
			<div className="flex items-center gap-2">
				<Image
					src="/github-white-icon.svg"
					alt="github"
					width="20"
					height="20"
				/>
				Sign in with GitHub
			</div>
		</Button>
	);
}
