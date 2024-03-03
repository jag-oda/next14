import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

const NUMBER_OF_PRODS_PER_PAGE = 8

export async function generateStaticParams() {
	const productsData = await getProductsList(40, 0);
	const pages = Math.ceil(productsData.data.length / NUMBER_OF_PRODS_PER_PAGE);
  return Array.from(Array(pages)).map((page) => ({ pageNumber: page }));
}


export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
  const currentPage = Number(params.pageNumber);
  const skip = params.pageNumber ? (currentPage * NUMBER_OF_PRODS_PER_PAGE) - NUMBER_OF_PRODS_PER_PAGE : 0;
  const products =  await getProductsList(NUMBER_OF_PRODS_PER_PAGE, skip);

  return (
	<>
  <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl h-screen">
      <ProductList products={products.data}/>
      <Pagination pageCount={Math.ceil(products.meta.total/NUMBER_OF_PRODS_PER_PAGE)}/>
  </section>
  </>
	);
}
