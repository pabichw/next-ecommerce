"use client";

import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ActiveLinkProps = {
  href: Route;
  activeClassName: string;
  className: string;
  children: ReactNode;
  notExact?: boolean;
};

function ActiveLink({
  className: extendCls,
  activeClassName,
  href,
  children,
  notExact,
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = notExact ? pathname.includes(href) : pathname === href;

  return (
    <Link
      href={href}
      className={twMerge("hover:underline", extendCls, isActive && activeClassName)}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
