import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import { routes } from "@/utils/routes";
import { getCategoryList } from "@/api/products";

type NavbarLinksContentType = {
    active: boolean
}

export const NavbarLinksContent = async(props: NavbarLinksContentType) => {
    const { active } = props
	const categoriesList = await getCategoryList();
	
	const subRoutes = categoriesList.map((category) => ({
		href: `/categories/${category.slug}/1`,
		label: category.name,
	}));

	const mergedRoutes = [...routes, ...subRoutes]

	return(
		<div className={`${active ? "" : "hidden"}   w-full lg:inline-flex lg:w-auto lg:flex-grow`}>
			<div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
				{mergedRoutes.map((route) => (
					<ActiveLink exact={route.label === "Home"} key={route.label} href={route.href as Route} isNavLink={true}>
						{route.label}
					</ActiveLink>
				))}
		</div>
</div>
    );
};
