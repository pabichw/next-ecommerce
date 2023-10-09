/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type Route } from "next";
import { isEmpty } from "radash";
import ActiveLink from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	resourcePath: string;
	totalPages: number;
	searchParams?: Record<"sorting", string>;
};

function Pagination({ resourcePath, searchParams, totalPages }: PaginationProps) {
	const endingSearchParms = isEmpty(searchParams)
		? ""
		: // @ts-ignore
		  `/?${Object.entries(searchParams).reduce(
				(aggr, [key, value]) => `${aggr}${key}=${value}&`,
				"",
		  )}`;

	return (
		<nav aria-label="Pagination" className="flex gap-2 mx-auto">
			{Array.from({ length: totalPages }).map((_, idx) => {
				const realIdx = idx + 1;

				return (
					<ActiveLink
						key={`pagination-${resourcePath}-${idx}`}
						className={`group no-underline relative font-bold transition trasition-[color] hover:no-underline
              after:content- [' * '] after:block after:absolute after:w-0 after:-bottom-1 after:-left-0 after:h-[2px] after:bg-sky-600 after:opacity-0 after:transition after:transition-[width,opacity]
              hover:after:w-full hover:after:opacity-100 hover:text-sky-600`}
						activeClassName="text-sky-600"
						href={`${resourcePath}/${realIdx}${endingSearchParms}` as Route}
					>
						{realIdx}
					</ActiveLink>
				);
			})}
		</nav>
	);
}

export default Pagination;
