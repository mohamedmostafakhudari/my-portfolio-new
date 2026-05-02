"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";

export default function SignInPage() {
	const form = useForm();

	return (
		<main className="flex  min-h-screen flex-col items-center justify-center">
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8"
			>
				<Controller
					name="username"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="form-rhf-demo-title">User Name</FieldLabel>
							<Input
								{...field}
								id="username"
								aria-invalid={fieldState.invalid}
								placeholder="Login button not working on mobile"
								autoComplete="off"
							/>
							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} />
							)}
						</Field>
					)}
				/>
				<Controller
					name="password"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="form-rhf-demo-title">User Name</FieldLabel>
							<Input
								{...field}
								type="password"
								id="password"
								aria-invalid={fieldState.invalid}
								placeholder="Login button not working on mobile"
								autoComplete="off"
							/>
							{fieldState.invalid && (
								<FieldError errors={[fieldState.error]} />
							)}
						</Field>
					)}
				/>
			</form>
			<Button
				variant="outline"
				className="w-30 mt-3"
				onClick={() => {
					signIn("github", {
						callbackUrl: "/protected",
					});
				}}
			>
				Sign in with GitHub
			</Button>
		</main>
	);
}
