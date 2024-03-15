import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@/api/category";

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