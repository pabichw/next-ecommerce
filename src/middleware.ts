/* eslint-disable import/no-default-export */
import { authMiddleware } from "@clerk/nextjs";

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/products",
		/categories\/(.*)/,
		/collections\/(.*)/,
		/product\/(.*)/,
	],
});
