'use server';
import { NavbarLinksContent } from "../molecules/NavbarLinksContent";

export async function Navbar(){
	return (
			<nav>
				<NavbarLinksContent />
			</nav>		
	);
};
