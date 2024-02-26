"use client";

import type { Route } from "next";
import { useState } from "react";
import { Menu } from "lucide-react";
import { ActiveLink } from "../atoms/ActiveLink";

export const Navbar = () => {
	const [active, setActive] = useState(false);

	const hangleToggleActive = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className="flex flex-wrap items-center bg-blue-300 p-3 ">
				<div className=" font-bold text-white">NEXT SHOP</div>
				<button
					onClick={hangleToggleActive}
					className=" ml-auto inline-flex rounded p-3 text-white outline-none hover:bg-blue-600 hover:text-white lg:hidden"
				>
					<Menu />
				</button>
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
			</nav>
		</>
	);
};
