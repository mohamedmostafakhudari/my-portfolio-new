import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function LogoutBtn() {
	return (
		<Button
			size="lg"
			variant="outline"
			onClick={() => signOut("github")}
		>
			<div className="flex items-center gap-2">
				<Image
					src="/github-white-icon.svg"
					alt="github"
					width="20"
					height="20"
				/>
				Sign out
			</div>
		</Button>
	);
}
