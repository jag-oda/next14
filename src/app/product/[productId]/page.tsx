import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescritpion";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductsList";


export const generateStaticParams = async () => {
    const products = await getProductsList();
    return products.map((product) => ({ productId: product.id }));
};

export const generateMetadata = async({params}: {params: {productId: string}}): Promise<Metadata> => {
    const product = await getProductById(params.productId);

    return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [product.images?[0].url],
		},
	};
};

export default async function SingleProductDetailsPage({
        params, 
        //searchParams
    } : {
        params: {productId : string}, 
        searchParams: {[key: string]: string | string[]}
    }
    ) {
    
    const product = await getProductById(params.productId)
    if (product === null) {
		return notFound();
	}


    return (
        <div>
           <article className="max-w-xs">
            <h1>{product.name}</h1>
            <ProductCoverImage src={product.images[0].url} alt={product.name} />
            <ProductListItemDescription product={product}/>
        </article>
           <aside>
                <Suspense>
                    <SuggestedProductList/>
                </Suspense>
            </aside>
        </div>
    )
};


//          /*  <SingleProductDetailsTemplate product={product} /> */
