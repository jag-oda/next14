import { getCollectionsList } from "@/api/products";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { Suspense } from "react";

export default async function HomePage(){
    const collections = await getCollectionsList();

    return (
        <section>
            <Suspense>
                <CollectionsList collections={collections} />
            </Suspense>
        </section>
    )
};