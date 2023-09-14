import { Route } from "next";
import ActiveLink from "@/ui/atoms/ActiveLink";

function Navbar() {
	const linkCls = `group no-underline relative font-bold transition trasition-[color] hover:no-underline border-b-[2px] border-transparent
    hover:border-sky-600 transition-[color,border-color]
    hover:after:w-full hover:after:opacity-100 hover:text-sky-600`;
	const activeLinkCls = "text-sky-600 border-sky-600";

	return (
		<nav
			role="navigation"
			className="sticky top-0 bg-neutral-100 shadow w-full p-5 flex align-center justify-center gap-8"
		>
			<ActiveLink className={linkCls} activeClassName={activeLinkCls} href="/">
				Home
			</ActiveLink>
			<ActiveLink
				className={linkCls}
				activeClassName={activeLinkCls}
				href={"/products" as Route}
				exact={false}
			>
				All
			</ActiveLink>
		</nav>
	);
}

export default Navbar;
