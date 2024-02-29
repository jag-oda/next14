import type { Metadata, Route } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	title: "NEXT shop",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<ul className="mt-2 flex justify-center space-x-4">
						<li>
							<ActiveLink 
								href={"/"}
								exact={false}
								aria-description="Home"
							>
								HomePage
							</ActiveLink>
						</li>
						<li>
							<ActiveLink 
								href={"/products/1" as Route}
								exact={false}
								aria-description="All"
							> 
								All products
							</ActiveLink>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-gray-200"> ©2024</p>
				</footer>
			</body>
		</html>
	);
}
