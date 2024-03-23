import { getProductsList } from "@/api/products";
import { ProductSortBy } from "@/gql/graphql";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductsSortFilter } from "@/ui/molecules/ProductsSortFilter";
import { ProductList } from "@/ui/organisms/ProductList";

type ProductsPageProps = {
	params: {
		pageNumber: string[];
	};
	searchParams: {
		sort: string;
	};
};

const NUMBER_OF_PRODS_PER_PAGE = 8

/*export async function generateStaticParams() {
	const productsData = await getProductsList(40, 0);
	const pages = Math.ceil(productsData.data.length / NUMBER_OF_PRODS_PER_PAGE);
  return Array.from(Array(pages)).map((page) => ({ pageNumber: page }));
} */


export default async function ProductsPage({ params, searchParams }: ProductsPageProps) {
  const currentPage = Number(params.pageNumber);
  const skip = params.pageNumber ? (currentPage * NUMBER_OF_PRODS_PER_PAGE) - NUMBER_OF_PRODS_PER_PAGE : 0;
  const order = searchParams.sort?.includes("-") ? "DESC" : "ASC";
	const orderBy = searchParams.sort?.replace("-", "").toUpperCase() as ProductSortBy;
  const products =  await getProductsList(NUMBER_OF_PRODS_PER_PAGE, skip, order, orderBy);

  return (
	<>
  <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl h-screen">
      <ProductsSortFilter />
      <ProductList products={products.data}/>
      <Pagination pageCount={Math.ceil(products.meta.total/NUMBER_OF_PRODS_PER_PAGE)}/>
  </section>
  </>
	);
}
