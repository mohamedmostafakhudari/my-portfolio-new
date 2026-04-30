/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "avatar.vercel.sh",
			},
			{
				protocol: "https",
				hostname: "placehold.co",
			},
		],
	},
};

export default nextConfig;
