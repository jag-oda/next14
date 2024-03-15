import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";
import { Suspense } from "react";
import { getProductById, getReviewsByProductId } from "@/api/product";
import { ProductCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductDetalistDescription } from "@/ui/atoms/ProductDetalistDescription";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductsList";
import { AddToCartButton } from "../AddToCartButton";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { revalidateTag } from "next/cache";
import { ProductReviewsSection } from "@/ui/organisms/ProductReviewsSection";
import { changeItemQuantity } from "@/app/cart/actions";

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

    const productReviews = await getReviewsByProductId(product.id);

    async function addToCartAction(formData: FormData){
        "use server";
       const cart = await getOrCreateCart();
       const isExistingProduct = cart.items.find((item) => item.product.id === params.productId);
       isExistingProduct ? await changeItemQuantity(cart.id, params.productId, isExistingProduct.quantity + 1)
       : await addProductToCart(cart.id, params.productId, 1);

       revalidateTag("cart");
    }

    return (
        <div className="text-left text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
                <h1 className="mb-6 text-5xl font-bold">{product.name}</h1>
                <article  className="mx-full w-full flex space-x-8 px-5 mt-10">
                    {product.images && <ProductCoverImage src={product.images[0].url} alt={product.name} /> }
                    <div>
                    <ProductDetalistDescription product={product} />
                    <form action={addToCartAction}>
                        <input type="hidden" name="productId" value={product.id} />
                        <AddToCartButton/>
                    </form>
                    </div>
              </article>

              <aside className="mt-10" data-testid="related-products">
                <Suspense key="suggestedProductSuspense">
                    <SuggestedProductList/>
                </Suspense>
            </aside>
            {productReviews  && (
				<aside className="mt-10" data-testid="product-reviews">
                <Suspense key="productReviewSuspense">
                    <ProductReviewsSection product={product} reviews={productReviews} />
                </Suspense>
            </aside>
			)}
              
        </div>
    )
};

