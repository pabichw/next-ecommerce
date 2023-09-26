"use client";

import { HomeIcon, ListChecks } from "lucide-react";
import { Route } from "next";
import { useEffect, useState } from "react";
import ActiveLink from "@/ui/atoms/ActiveLink";
import Logo from "@/ui/atoms/Logo";
import Auth from "@/ui/molecules/Auth";
import LangSwitcher from "@/ui/molecules/LangSwitcher";
import Minicart from "@/ui/molecules/Minicart";

type NavbarProps = {
	categories?: Array<{ url: string; label: string }>;
};

function Navbar({ categories }: NavbarProps) {
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
	const linkTextCls = `hidden md:inline max-w-full overflow-x-hidden transition transition-[max-width] ${
		minified ? "!max-w-0" : ""
	}`;

	return (
		<div className="fixed top-0 z-10 bg-white shadow w-full flex align-center justify-between gap-8">
			<nav
				role="navigation"
				className={`column-wrapper mx-auto ${
					minified ? "py-[0.25rem]" : "py-2"
				} flex items-center justify-between w-full transition-[padding]`}
			>
				<div
					className={`scale-100 grayscale-0 transition-[transform,filter] ${
						minified ? "scale-[0.7] !grayscale" : ""
					}`}
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
					{categories?.map((category) => (
						<ActiveLink
							key={`category-link-${category.label}`}
							className={linkCls}
							activeClassName={activeLinkCls}
							href={category.url as Route}
							exact={false}
						>
							<span className={linkTextCls}>{category.label}</span>
						</ActiveLink>
					))}
				</div>
				<div className="flex gap-5 items-center">
					<LangSwitcher />
					<Auth />
					<Minicart />
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
