import type { Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import { routes } from "@/utils/routes";
import { getCategoryList } from "@/api/category";

export const NavbarLinksContent = async() => {
	const categoriesList = await getCategoryList();
	
	const subRoutes = categoriesList.map((category) => ({
		href: `/categories/${category.slug}/1`,
		label: category.name,
	}));

	const mergedRoutes = [...routes, ...subRoutes];

	return(
		<article className="hidden gap-2 lg:flex">
		{mergedRoutes.map((route) => (
			<ActiveLink exact={route.label === "Home"} key={route.label} href={route.href as Route}>
			{route.label}
		</ActiveLink>
	))}
</article>
    );
};
