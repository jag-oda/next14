import { notFound } from "next/navigation"
import { getCollectionBySlug } from "@/api/collections"
import { CollectionDetailsDescription } from "@/ui/atoms/CollectionDetalistDescription"
import { Suspense } from "react"
import { ProductList } from "@/ui/organisms/ProductList"

type CollectionPageProps = {
    params: {
        slug: string
    }
}

export default async function CollectionPage({ params }: CollectionPageProps){
    const collection = await getCollectionBySlug(params.slug)

    if(!collection){
        notFound();
    } 
    return (
        <div>
            <CollectionDetailsDescription name={collection.name} description={collection.description}/>
            <aside className="mt-10">
                <Suspense key="productsListSuspense">
                    <ProductList products={collection.products} />
                </Suspense>
            </aside>
        </div>
    )
}