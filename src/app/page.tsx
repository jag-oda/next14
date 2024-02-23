import { ProductList } from "@/ui/organisms/ProductList";
import productListItems from "@/utils/productListItems.json"

export default function Home() {
	return (
	<>
  <section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl h-screen">
      <h3 className=" ml-2 mb-4 py-4 text-2xl">Products</h3>
      <ProductList products={productListItems}/>
  </section>
  </>
	);
}
