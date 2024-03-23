import { ProductList } from "@/ui/organisms/ProductList";
import { getSuggestedProductsList } from "@/api/products";


export const SuggestedProductList = async () => {
    const suggestedProducts = await getSuggestedProductsList();

    return (
        <div className="mt-10">
            <h2 className="text-xl font-bold leading-7 py-6">Suggested for you </h2>
            <ProductList products={suggestedProducts} />
        </div>
    ) 
};