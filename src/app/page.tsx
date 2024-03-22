import { getCollectionsList } from "@/api/collections";
import { getProductsList } from "@/api/products";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { ProductList } from "@/ui/organisms/ProductList";
import { Suspense } from "react";

export default async function HomePage(){
    const products = await getProductsList(40,0);
    const collections = await getCollectionsList();

    return (
        <section>
            <Suspense key="collectionsListSuspense">
                <CollectionsList collections={collections} />
            </Suspense>
            <Suspense key="productsListHome">
				<ProductList products={products.data} />
			</Suspense>
        </section>
    )
};