import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { paginate } from "@/utils/utils";

type ProductsPagePropsType = {
  params: {
    pageNumber: string
  }
}

export default async function ProductsPage({ params }: ProductsPagePropsType) {
  const products =  await getProductsList();
  const currentPage = Number(params.pageNumber);
  const pageSize = 4;
 
  const paginatedProducts = paginate(products, currentPage, pageSize);

	return (
	<>
  <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl h-screen">
      <ProductList products={paginatedProducts}/>
      <Pagination 
        currentPage={currentPage}
        pageSize={pageSize}
        items={products.length}
      />
  </section>
  </>
	);
}