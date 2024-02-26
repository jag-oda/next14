import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

type NavbarLinksContentType = {
    active: boolean
}

export const NavbarLinksContent = (props: NavbarLinksContentType) => {
    const { active } = props
    return(
        <div className={`${active ? "" : "hidden"}   w-full lg:inline-flex lg:w-auto lg:flex-grow`}>
					<div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
						<ActiveLink href={"/"} exact={false} aria-description="Home" isNavLink={true}>
							HomePage
						</ActiveLink>
						<ActiveLink href={"/products/1" as Route} exact={false} aria-description="All" isNavLink={true}>
							All products
						</ActiveLink>
					</div>
				</div>
    );
};