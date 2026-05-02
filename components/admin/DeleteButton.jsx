"use client";
import DeleteAlertDialog from "@/components/shared/DeleteAlertDialog";
import { Button } from "@/components/ui/button";

const DeleteButton = ({ deleteProjectAction }) => {
	return (
		<DeleteAlertDialog
			onConfirm={async () => {
				await deleteProjectAction();
			}}
		>
			<Button variant="destructive">Delete</Button>
		</DeleteAlertDialog>
	);
};

export default DeleteButton;
