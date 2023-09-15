"use client";

import ActiveLink from "@/ui/atoms/ActiveLink";
import Logo from "@/ui/atoms/Logo";
import Minicart from "@/ui/molecules/Minicart";
import { HomeIcon, ListChecks } from "lucide-react";
import { Route } from "next";
import { useEffect, useState } from "react";

function Navbar() {
	const [minified, setMinified] = useState(false);

	const checkMinified = () => {
		const { scrollY } = window;

		const shouldBeMinified = scrollY > 100;
		if (shouldBeMinified) {
			setMinified(true);
			return;
		}

		if (!shouldBeMinified) {
			setMinified(false);
			return;
		}
	};

	useEffect(() => {
		checkMinified();
		document.addEventListener("scroll", checkMinified);

		return () => {
			document.removeEventListener("scroll", checkMinified);
		};
	}, []);

	const linkCls = `group no-underline relative font-bold transition transition-[color,border-color,gap] border-b-[2px] border-transparent
    hover:border-sky-600 hover:text-sky-600 hover:no-underline
    ${minified ? "gap-0" : ""}
  `;
	const activeLinkCls = "text-sky-600 border-sky-600";
	const iconCls = "mt-[-1px]";
	const linkTextCls = `max-w-full overflow-x-hidden transition transition-[max-width] ${
		minified ? "!max-w-0" : ""
	}`;

	return (
		<div className="sticky top-0 z-10 bg-neutral-100 shadow w-full flex align-center justify-between gap-8">
			<nav
				role="navigation"
				className={`column-wrapper mx-auto ${
					minified ? "py-1" : "py-1"
				} flex items-center justify-between w-full transition-[padding]`}
			>
				<div
					className={`scale-100 transition transition-[transform] ${minified ? "scale-75" : ""}`}
				>
					<Logo />
				</div>
				<div className="flex gap-8 items-center">
					<ActiveLink className={linkCls} activeClassName={activeLinkCls} href="/">
						<HomeIcon className={iconCls} size={17} />
						<span className={linkTextCls}>Home</span>
					</ActiveLink>
					<ActiveLink
						className={linkCls}
						activeClassName={activeLinkCls}
						href={"/products" as Route}
						exact={false}
					>
						<ListChecks className={iconCls} size={17} />
						<span className={linkTextCls}>All</span>
					</ActiveLink>
				</div>
				<div className="flex items-center">
					<Minicart />
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
