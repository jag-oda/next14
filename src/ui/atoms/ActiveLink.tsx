"use client";
import { Route } from "next";
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type ActiveLinkPropsType = {
    href: Route,
    children: ReactNode,
    exact: boolean,
    "aria-description"?: string,
};

export const ActiveLink = ( props: ActiveLinkPropsType) => {
    const { href, children, exact } = props;
    let pathname = usePathname();
    const isActive = pathname === href;

    if (!exact) {
		const link = pathname.split("/").splice(2).join("/");
		pathname = link;
	}

    return (
        isActive ? 
			<Link 
                href={href}
                className={clsx(`text-blue-400 hover:text-blue-600 underline`)}
                aria-current={true}
                aria-description={props["aria-description"]}
            > 
                {children}
            </Link>
            : 
            <Link 
                href={href}
                className={clsx(`text-blue-400 hover:text-blue-600`)}
                aria-description={props["aria-description"]}
            > 
                {children}
            </Link>
    );
};