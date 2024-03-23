import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@/api/category";
import { Pagination } from "@/ui/molecules/Pagination";

type CategoryProductPageProps = {
	params: {
		category: string;
		pageNumber: string;
	};
};

export const generateMetadata = async ({ params }: CategoryProductPageProps) => {
  const category = await getProductsByCategorySlug(params.category);
  if (!category) return { title: "Category" };
  return {
		title: category[0]?.categories[0]?.name || "Categories",
		openGraph: {
			title: category[0]?.categories[0]?.name || "Categories",
		},
	}; 
}; 

const NUMBER_OF_PRODS_PER_PAGE = 8

export default async function CategoryProductPage({params}: {params: {name: string, category: string, pageNumber: number}}){
    const products = await getProductsByCategorySlug(params.category);
    if(!products){
        notFound();
    } 

    return (
      <div>
        <h1 className="mb-6 text-5xl font-bold mb-10">{products[0]?.categories[0]?.name || params.category}</h1>
        <ProductList products={products} />
        <Pagination pageCount={Math.ceil(products.length/NUMBER_OF_PRODS_PER_PAGE)}/>
      </div>
    )
}