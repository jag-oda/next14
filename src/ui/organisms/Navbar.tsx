"use client";

import { useState } from "react";
import { HamburgerManu } from "../atoms/HamburgerMenu";
import { NavbarLinksContent } from "../molecules/NavbarLinksContent";

export const Navbar = () => {
	const [active, setActive] = useState(false);

	const hangleToggleActive = () => {
		setActive(!active);
	};

	return (
		<>
			<nav className="flex flex-wrap items-center bg-blue-300 p-3 ">
				<div className=" font-bold text-white">NEXT SHOP</div>
				<HamburgerManu toggleFnc={hangleToggleActive} />
				<NavbarLinksContent active={active} />
			</nav>
		</>
	);
};
