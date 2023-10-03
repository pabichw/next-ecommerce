/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		typedRoutes: true,
	},
	images: {
		domains: ["example.com", "images.dog.ceo", "naszsklep-api.vercel.app"],
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
			{
				source: "/categories/:slug",
				destination: "/categories/:slug/1",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
