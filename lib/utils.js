import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function formatSlug(str) {
	return str.toLowerCase().split(" ").join("-");
}
