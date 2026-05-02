import { createClient } from "@/lib/supabase/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { promises as fs } from "fs";
import path from "path";

async function fetchData(filename) {
	const filePath = path.join(process.cwd(), "data", filename);

	const jsonData = await fs.readFile(filePath, "utf8");
	const data = JSON.parse(jsonData);
	return data;
}
export async function getSkills() {
	const skills = await fetchData("skills.json");
	return skills;
}

export async function getProjects() {
	const supabase = await createClient();

	const { data: projects, error } = await supabase
		.from("projects")
		.select("*");

	// console.log("my projects:", projects);
	if (error) throw new Error(error.message);
	// const projects = await fetchData("projects.json");
	return { projects, error };
}

export async function getProjectsStaticParams() {
	/**
	 * Fixed a conflict between build-time functions [generateStaticParams()]
	 * and request-time functions and elements (auth,cookies, HTTP requests, .. etc)
	 */
	const supabase = createAdminClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.SUPABASE_SECRET_KEY,
	);

	const { data: projects, error } = await supabase
		.from("projects")
		.select("slug");

	if (error) throw new Error(error.message);
	// const projects = await fetchData("projects.json");
	return projects;
}

export async function getProject(slug) {
	const supabase = await createClient();

	const { data: project, error } = await supabase
		.from("projects")
		.select()
		.eq("slug", slug);
	// const projects = await fetchData("projects.json");
	// const p = projects.find((p) => p.slug === slug);
	if (error) throw new Error(error.message);
	return project[0];
}
