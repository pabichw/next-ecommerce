import { type Route } from "next";
import ActiveLink from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	totalPages: number;
	resourcePath: string;
};

function Pagination({ resourcePath, totalPages }: PaginationProps) {
	return (
		<nav aria-label="Pagination" className="flex gap-2">
			{Array.from({ length: totalPages }).map((_, idx) => {
				const realIdx = idx + 1;

				return (
					<ActiveLink
						key={`pagination-${resourcePath}-${idx}`}
						className={`group no-underline relative font-bold transition trasition-[color] hover:no-underline
              after:content- [' * '] after:block after:absolute after:w-0 after:-bottom-1 after:-left-0 after:h-[2px] after:bg-sky-600 after:opacity-0 after:transition after:transition-[width,opacity]
              hover:after:w-full hover:after:opacity-100 hover:text-sky-600`}
						activeClassName="text-sky-600"
						href={`${resourcePath}/${realIdx}` as Route}
					>
						{realIdx}
					</ActiveLink>
				);
			})}
		</nav>
	);
}

export default Pagination;
