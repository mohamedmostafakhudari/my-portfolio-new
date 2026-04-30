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
	const projects = await fetchData("projects.json");
	return projects;
}

export async function getProject(slug) {
	const projects = await fetchData("projects.json");
	const p = projects.find((p) => p.slug === slug);
	return p;
}
