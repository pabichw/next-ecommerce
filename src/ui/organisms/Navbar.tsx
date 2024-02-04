import { SignedIn } from "@clerk/nextjs";
import { HomeIcon, LayersIcon, ListChecks } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import ActiveLink from "@/ui/atoms/ActiveLink";
import Logo from "@/ui/atoms/Logo";
import Auth from "@/ui/molecules/Auth";
import Minicart from "@/ui/molecules/Minicart";
import { SearchInput } from "@/ui/organisms/SearchInput";

type NavbarProps = {
	categories?: Array<{ url: string; label: string }>;
};

function Navbar({ categories }: NavbarProps) {
	const linkCls = `group no-underline relative font-bold transition transition-[color,border-color,gap] border-b-[2px] border-transparent
    hover:border-sky-600 hover:text-sky-600 hover:no-underline
  `;
	const activeLinkCls = "text-sky-600 border-sky-600";
	const iconCls = "mt-[-1px]";
	const linkTextCls = `hidden md:inline max-w-full overflow-x-hidden transition transition-[max-width]`;

	return (
		<div className="w-full fixed top-0 z-10 bg-white shadow">
			<div className="column-wrapper px-4 py-2  flex align-center justify-between gap-8 transition-[padding]">
				<nav role="navigation" className="mx-auto flex items-center justify-between w-full">
					<div className={`scale-100 grayscale-0 transition-[transform,filter]`}>
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
								<LayersIcon className={iconCls} size={17} />
								<span className={linkTextCls}>{category.label}</span>
							</ActiveLink>
						))}
					</div>
				</nav>
				<div className="flex items-center justify-center mx-3">
					<SearchInput />
				</div>
				<div className="flex gap-5 items-center justify-between ">
					<SignedIn>
						<Link href="/orders" className="text-neutral-400 text-xs leading-3 hover:underline">
							Your orders
						</Link>
					</SignedIn>
					<Auth />
					<Minicart />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
