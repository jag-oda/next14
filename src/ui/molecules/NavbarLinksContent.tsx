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

	return(
		<div className="justify-start lg:inline-flex lg:w-auto lg:flex-grow">
			<div className="flex">
				{routes.map((route) => {
					return (
						route.expandable ? (
							<div className="flex relative group">
							<ActiveLink exact={false} key={route.label} href={route.href as Route} isNavLink={true}>
									{route.label}
							</ActiveLink>
							<ul className="absolute bg-blue-300 p-3 lg:w-auto top-10 r-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
								{subRoutes.map((subRoute) => {
									return (
										<ActiveLink exact={false} key={subRoute.label} href={subRoute.href as Route} isNavLink={true}>
											{subRoute.label}
										</ActiveLink>
									)
								})}
							</ul>
							</div>
							
						) : 
					<ActiveLink exact={route.label === "Home"} key={route.label} href={route.href as Route} isNavLink={true}>
							{route.label}
					</ActiveLink>
			)
				})}
		</div>
</div>
    );
};
