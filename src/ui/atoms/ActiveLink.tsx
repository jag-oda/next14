"use client";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type ActiveLinkPropsType = {
    href: Route,
    children: ReactNode,
    exact: boolean,
    "aria-description"?: string,
    isNavLink?: boolean
};

export const ActiveLink = ( props: ActiveLinkPropsType) => {
    const { href, children, exact, isNavLink } = props;
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href)

    return (
        isActive ? 
			<Link 
                href={href}
                className={ `${isNavLink ? "hover:bg-blue-600 hover:text-white" : ""} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center underline`}
                aria-current={true}
                aria-description={props["aria-description"]}
            > 
                {children}
            </Link>
            : 
            <Link 
                href={href}
                className={`${isNavLink ? "hover:bg-blue-600 hover:text-white" : ""} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center`}
                aria-description={props["aria-description"]}
            > 
                {children}
            </Link>
    );
};