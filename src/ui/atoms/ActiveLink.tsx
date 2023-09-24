"use client";

import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ActiveLinkProps<T extends string> = {
  href: Route<T>;
  activeClassName: string;
  className: string;
  children: ReactNode;
  exact?: boolean;
};

function ActiveLink<T extends string>({
  className: extendCls,
  activeClassName,
  href,
  children,
  exact = true,
}: ActiveLinkProps<T>) {

  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.includes(href);

  return (
    <Link
      href={href}
      className={
        twMerge(
          "inline-flex items-center gap-2 hover:underline",
          extendCls,
          isActive && activeClassName,
        )
      }
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
