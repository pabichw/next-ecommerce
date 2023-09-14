import ActiveLink from "@/ui/atoms/ActiveLink";

function Navbar() {
	const linkCls = `group no-underline relative font-bold transition trasition-[color] hover:no-underline
    after:content- [' * '] after:block after:absolute after:w-0 after:-bottom-1 after:h-[2px] after:bg-sky-600 after:opacity-0 after:transition after:transition-[width,opacity]
    hover:after:w-full hover:after:opacity-100 hover:text-sky-600`;
	const activeLinkCls = "text-sky-600";

	return (
		<nav className="sticky top-0 bg-neutral-100 shadow w-full p-5 flex align-center justify-center gap-8">
			<ActiveLink className={linkCls} activeClassName={activeLinkCls} href="/">
				Home
			</ActiveLink>
			<ActiveLink
				className={linkCls}
				activeClassName={activeLinkCls}
				href="/products/1"
				exact={false}
			>
				All
			</ActiveLink>
		</nav>
	);
}

export default Navbar;
