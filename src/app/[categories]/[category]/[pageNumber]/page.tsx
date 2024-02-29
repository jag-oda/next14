//import { notFound } from "next/navigation";
//import { executeGraphql } from "@/api/graphglApi";
//import { ProductList } from "@/ui/organisms/ProductList";
//import { getProductsByCategorySlug } from "@/api/products";

export async function generateStaticParams({ params }: { params: { category: string } }) {
	// pobierz produkty dla danej kategorii
	//console.log(params);
	return [{category: params.category, pageNumber: "1" }];
}

export default async function CategoryProductPage({params}: {params: {category: string, pageNumber: number}}){
  /* const products = []// await getProductsByCategorySlug(params.category)

    if(!products){
        notFound();
    } */

    return (
      <><h1> Producty z kategoriii {params.category} ze strony {params.pageNumber}</h1></>
    )
}