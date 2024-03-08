"use client";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import clsx from "clsx";


type ActiveLinkPropsType = {
    href: Route,
    children: ReactNode,
    exact: boolean,
    "aria-description"?: string,
    isNavLink?: boolean
    isPaginationLink?: boolean
};

export const ActiveLink = ( props: ActiveLinkPropsType) => {
    const { href, children, exact, isNavLink, isPaginationLink } = props;
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href)

    return (
			<Link 
                href={href}
                className={clsx(
                    `lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center `,
                    isActive && `underline`,
                    isNavLink && `hover:text-slate-500  text-white block`,
                    isPaginationLink && `text-gray-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`
                )}
                aria-current={true}
                aria-description={props["aria-description"]}
            > 
                {children}
            </Link>
    )
};