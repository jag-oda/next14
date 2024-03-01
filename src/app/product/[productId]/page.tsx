import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductDetalistDescription } from "@/ui/atoms/ProductDetalistDescription";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductsList";


export const generateStaticParams = async () => {
    const products = await getProductsList();
    return products.map((product) => ({ productId: product.id }));
};

export const generateMetadata = async({params}: {params: {productId: string}}): Promise<Metadata> => {
    const product = await getProductById(params.productId);
    if(!product) throw new Error("Product doesn't exist.");

    return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [
				{
					url: product.images[0]?.url || "",
					alt: product.name,
				},
			],
		},
	};
}

export default async function SingleProductDetailsPage({
        params, 
        //searchParams
    } : {
        params: {productId : string}, 
        searchParams: {[key: string]: string | string[]}
    }
    ) {
    
    const product = await getProductById(params.productId)
    if (!product) {
		return notFound();
	}

    return (
        <div className="text-left text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
                <h1 className="mb-6 text-5xl font-bold">{product.name}</h1>
                <article  className="mx-full w-full flex space-x-8 px-5 mt-10">
                    {product.images && <ProductCoverImage src={product.images[0].url} alt={product.name} /> }
                    <ProductDetalistDescription product={product} />
              </article>
              <aside className="mt-10">
                <Suspense>
                    <SuggestedProductList/>
                </Suspense>
            </aside>
        </div>
    )
};


//          /*  <SingleProductDetailsTemplate product={product} /> */
