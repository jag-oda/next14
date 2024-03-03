import { getProductsListBySearch} from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

type SearchProductsPageProps = {
	searchParams: {
		query: string;
	};
};

export default async function SearchProductsPage({ searchParams }: SearchProductsPageProps) {
	const products = await getProductsListBySearch(searchParams.query);

	if (!products || products.length === 0) return <p className="mx-auto py-8 font-bold text-xl">We did't find the products you are looking for.</p>;

    return (
		<div className="mx-auto max-w-7xl px-8">
			<div className="mx-auto py-8 font-bold text-xl">
				We found {products.length} for "{searchParams.query}"
			</div>
			<ProductList products={products} />
		</div>
	);
}