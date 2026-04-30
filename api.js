const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

async function fetchJSON(endpoint, options) {
	const res = await fetch(`${BASE_URL}${endpoint}`, options);
	if (!res.ok) throw new Error(`Fetch failed: ${endpoint} - ${res.status}`);
	return res.json();
}

export const postsApi = {
	getAll: () => {
		return fetchJSON("/posts", { next: { revalidate: 3600 } });
	},

	getBySlug: (slug) => {
		return fetchJSON(`/posts?slug=${slug}`, { next: { revalidate: 3600 } });
	},

	getByAuthor: (authorId) => {
		return fetchJSON(`/posts?authorId=${authorId}`, { cache: "no-store" });
	},

	getAllAdmins: () => fetchJSON("/posts", { cache: "no-store" }),

	getAllSlugs: () =>
		fetchJSON("/posts?status=published", { cache: "no-store" }),

	getByCategory: (categoryId) => {
		return fetchJSON(`/posts?categoryId=${categoryId}`, {
			next: { revalidate: 3600 },
		});
	},
};

export const commentsApi = {
	getByPost: (postId) => {
		return fetchJSON(`/comments?postId=${postId}`);
	},
};

export const tagsApi = {
	getAll: () => {
		return fetchJSON("/tags", { next: { revalidate: 86400 } });
	},

	getByIds: async (ids) => {
		const all = fetchJSON("/tags", { next: { revalidate: 86400 } });
		return all.filter((t) => ids.includes(t.id));
	},
};

export const usersApi = {
	getById: (id) => {
		return fetchJSON(`/users/${id}`, { next: { revalidate: 3600 } });
	},

	getByUsername: (username) => {
		return fetchJSON(`/users?username=${username}`, {
			next: { revalidate: 3600 },
		}).then((users) => users[0] ?? null);
	},

	getAll: () => {
		return fetchJSON("/users", { cache: "no-store" });
	},
};

export const categoriesApi = {
	getAll: () => {
		return fetchJSON("/categories", { next: { revalidate: 86400 } });
	},
	getBySlug: (slug) => {
		return fetchJSON(`/categories?slug=${slug}`, {
			next: { revalidate: 86400 },
		}).then((cats) => cats[0] ?? null);
	},
};
