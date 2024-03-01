import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphglApi";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@/api/products";

export async function generateStaticParams({ params }: { params: { category: string } }) {
	// pobierz produkty dla danej kategorii
	//console.log(params);
	return [{category: params.category, pageNumber: "1" }];
}

export default async function CategoryProductPage({params}: {params: {category: string, pageNumber: number}}){
    const products = await getProductsByCategorySlug(params.category)

    if(!products){
        notFound();
    } 

    return (
      <div>
        <h1 className="uppercase mb-6 text-5xl font-bold mb-10">{params.category}</h1>
        <ProductList products={products} />
      </div>
    )
}