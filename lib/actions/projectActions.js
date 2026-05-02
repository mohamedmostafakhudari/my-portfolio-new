"use server";
import { auth } from "@/auth";
import { createClient } from "@/lib/supabase/server";
import { formatSlug } from "@/lib/utils";
import { revalidatePath } from "next/cache";

// const mockData = {
// 	slug: "abc12",
// 	title: "ABC12",
// 	description: "abc desc",
// 	image: "placehold2er",
// 	techStack: ["fdlka2", "react"],
// 	liveUrl: "liveUr2l",
// 	githubUrl: "githu2bUrl",
// };

export const createProject = async (formData) => {
	// use server = marks server-side functions that can be called from client-side code
	const session = await auth();
	if (!session || session?.user?.email !== process.env.ADMIN_EMAIL)
		throw new Error("Unauthorized access");
	console.log(formData);
	const slug = formData.slug;
	const title = formData.title;
	const description = formData.description;
	const image = formData.image;
	const techStack = formData.techStack;
	const liveUrl = formData.liveUrl;
	const githubUrl = formData.githubUrl;

	const supabase = await createClient();

	const { data, error } = await supabase
		.from("projects")
		.insert({
			slug: formatSlug(slug),
			title,
			description,
			image,
			techStack,
			liveUrl,
			githubUrl,
		})
		.select();

	if (error) throw new Error(error.message);

	revalidatePath("/projects");
	revalidatePath("/admin");

	return data;
};

export const updateProject = async (id, formData) => {
	const session = await auth();
	if (!session || session?.user?.email !== process.env.ADMIN_EMAIL)
		throw new Error("Unauthorized access");

	const supabase = await createClient();

	const slug = formData.slug;
	const title = formData.title;
	const description = formData.description;
	const image = formData.image;
	const techStack = formData.techStack;
	const liveUrl = formData.liveUrl;
	const githubUrl = formData.githubUrl;

	const { error } = await supabase
		.from("projects")
		.update({
			slug: formatSlug(slug),
			title,
			description,
			image,
			techStack,
			liveUrl,
			githubUrl,
		})
		.eq("id", id);

	if (error) throw new Error(error.message);

	revalidatePath("/projects");
	revalidatePath("/admin");
};

export const deleteProject = async (id) => {
	const session = await auth();
	if (!session || session?.user?.email !== process.env.ADMIN_EMAIL)
		throw new Error("Unauthorized access");

	const supabase = await createClient();

	const { error } = await supabase.from("projects").delete().eq("id", id);

	if (error) throw new Error(error.message);

	revalidatePath("/projects");
	revalidatePath("/admin");
};
