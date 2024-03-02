import { NavbarLinksContent } from "../molecules/NavbarLinksContent";

export const Navbar = () => {
	return (
		<>
			<nav className="flex flex-wrap h-16 items-center bg-blue-300 p-3 border-b-2 border-blue-500">
				<NavbarLinksContent />
			</nav>
		</>
	);
};
