"use client";
import MultipleSelect from "@/components/form/MultipleSelect";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createProject, updateProject } from "@/lib/actions/projectActions";
import Form from "next/form";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

const technologies = [
	"React",
	"Next.js",
	"Angular",
	"Vue.js",
	"Nuxt.js",
	"Svelte",
	"SvelteKit",
	"Node.js",
	"Express.js",
	"NestJS",
	"tRPC",
	"GraphQL",
	"Apollo",
	"MongoDB",
	"PostgreSQL",
	"MySQL",
	"SQLite",
	"Prisma",
	"Firebase",
	"Supabase",
	"AWS",
	"Docker",
	"Kubernetes",
	"Tailwind CSS",
	"TypeScript",
	"JavaScript",
	"PHP",
	"Laravel",
	"Python",
	"Django",
	"Flask",
	"Ruby on Rails",
	"Java",
	"Spring Boot",
	"C#",
	"ASP.NET Core",
	"Redis",
	"Elixir",
	"Phoenix",
	"WordPress",
	"Remix",
	"Vite",
	"Webpack",
	"Bun",
	"Turbopack",
];

const ProjectForm = ({
	id,
	slug,
	title,
	description,
	techStack,
	liveUrl,
	githubUrl,
}) => {
	console.log(title);
	const pathname = usePathname();
	const editMode = pathname.includes("edit");

	const {
		control,
		getFieldState,
		formState: { errors, isSubmitSuccessful },
		handleSubmit,
		reset,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			title: title ?? "",
			slug: slug ?? "",
			description: description ?? "",
			techStack: techStack ?? [],
			liveUrl: liveUrl ?? "",
			githubUrl: githubUrl ?? "",
		},
	});

	const router = useRouter();

	const onSubmit = handleSubmit(async (data) => {
		console.log(data);
		if (editMode) {
			await updateProject(id, data);
		} else {
			await createProject(data);
		}
		router.replace("/admin");
	});

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	return (
		<Form
			onSubmit={onSubmit}
			className="flex flex-col gap-4 max-w-lg mx-auto"
		>
			<Field>
				<FieldLabel htmlFor="title">Project Title</FieldLabel>
				<Controller
					name="title"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<Input
							{...field}
							id="title"
						/>
					)}
				/>
				{errors.title && <p>Input is empty or not valid</p>}
			</Field>
			<Field>
				<FieldLabel htmlFor="slug">Project Slug</FieldLabel>
				<Controller
					name="slug"
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<Input
							{...field}
							id="slug"
						/>
					)}
				/>
				{errors.slug && <p>Input is empty or not valid</p>}
			</Field>
			<Field>
				<FieldLabel htmlFor="description">Project Description</FieldLabel>
				<Controller
					name="description"
					control={control}
					render={({ field }) => (
						<Textarea
							{...field}
							id={"description"}
							rows={6}
						/>
					)}
				/>
				{errors.description && <p>Input is empty or not valid</p>}
			</Field>
			<Field>
				<FieldLabel htmlFor="techStack">Tech Stack</FieldLabel>
				<Controller
					name="techStack"
					control={control}
					render={({ field }) => (
						<MultipleSelect
							value={field.value}
							onValueChange={field.onChange}
							options={technologies}
							id="techStack"
							className="w-full"
						/>
					)}
				/>
			</Field>
			{errors.techStack && <p>Input is empty or not valid</p>}
			<div className="flex gap-4">
				<Field>
					<FieldLabel htmlFor="liveUrl">Live URL</FieldLabel>
					<Controller
						name="liveUrl"
						control={control}
						rules={{
							required: true,
							pattern: {
								value:
									/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,24}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
								message: "You need to provide valid full URL",
							},
						}}
						render={({ field }) => (
							<Input
								{...field}
								id="liveUrl"
							/>
						)}
					/>
					{errors.liveUrl && <p>Input is empty or not valid</p>}
				</Field>
				<Field>
					<FieldLabel htmlFor="githubUrl">Github Url</FieldLabel>
					<Controller
						name="githubUrl"
						control={control}
						rules={{
							required: true,
							pattern: {
								value:
									/^(https:\/\/github\.com\/|git@github\.com:)([\w.-]+)\/([\w.-]+?)(\.git)?$/,
								message: "You need to provide valid github repo URL",
							},
						}}
						render={({ field }) => (
							<Input
								{...field}
								id="githubUrl"
							/>
						)}
					/>
					{errors.githubUrl && <p>Input is empty or not valid</p>}
				</Field>
			</div>
			<div className="flex items-center gap-4 mt-4">
				{editMode ? (
					<Button
						type="submit"
						className={"flex-1"}
					>
						Save Changes
					</Button>
				) : (
					<Button
						type="submit"
						className={"flex-1"}
					>
						Create
					</Button>
				)}
				<Button
					type="reset"
					variant="outline"
					className={"min-w-36"}
				>
					Reset
				</Button>
			</div>
		</Form>
	);
};

export default ProjectForm;
